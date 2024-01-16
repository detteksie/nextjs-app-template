import { randomBytes, randomUUID } from 'crypto';
import { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { serverApi } from './server-api';
import { AxiosResponse } from 'axios';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'server-api',
      name: 'ServerAPI',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userSession: { label: 'Email or Username', type: 'text', placeholder: 'ssamsara98' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        let respToken: AxiosResponse<{
          tokenType: string;
          accessToken: string;
          refreshToken: string;
        }> | null = null;
        try {
          respToken = await serverApi.post('/login', {
            userSession: credentials?.userSession,
            password: credentials?.password,
          });
        } catch (err) {
          console.error('fail - login');
          throw new Error('CredentialsSignin');
        }

        let respUser: AxiosResponse<{
          id: string;
          username: string;
          email: string;
          name: string;
          picture: string;
          sexType: string;
          birthdate: string | null;
          telephone: string | null;
        }> | null = null;
        try {
          respUser = await serverApi.get('/profile', {
            headers: {
              Authorization: `${respToken?.data?.tokenType} ${respToken?.data?.accessToken}`,
            },
          });
        } catch (err) {
          console.error('fail - fetch profile');
          throw new Error('CredentialsSignin');
        }

        // If no error and we have user data, return it
        if (respUser?.data) {
          return { ...respUser?.data, ...respToken?.data };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    CredentialsProvider({
      id: 'refresh-token',
      name: 'RefreshToken',
      credentials: {
        tokenType: { label: 'Token Type', type: 'text' },
        refreshToken: { label: 'Refresh Token', type: 'text' },
      },
      async authorize(credentials, req) {
        let respToken: AxiosResponse<{
          tokenType: string;
          accessToken: string;
          refreshToken: string;
        }> | null = null;
        try {
          respToken = await serverApi.post(
            '/refresh-token',
            {},
            {
              headers: { Authorization: `${credentials?.tokenType} ${credentials?.refreshToken}` },
            },
          );
        } catch (err) {
          console.error('fail - refresh token');
          throw new Error('Refresh Token');
        }

        let respUser: AxiosResponse<{
          id: string;
          username: string;
          email: string;
          name: string;
          picture: string;
          sexType: string;
          birthdate: string | null;
          telephone: string | null;
        }> | null = null;
        try {
          respUser = await serverApi.get('/profile', {
            headers: {
              Authorization: `${respToken?.data?.tokenType} ${respToken?.data?.accessToken}`,
            },
          });
        } catch (err) {
          console.error('fail - fetch profile');
          throw new Error('Refresh Token');
        }

        // If no error and we have user data, return it
        if (respUser?.data) {
          return { ...respUser?.data, ...respToken?.data };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    // strategy: 'database',
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  callbacks: {
    async jwt(params) {
      // console.log('callback -> jwt');
      // console.log('params', params);
      if (params.trigger === 'signIn' && params.user) {
        // console.log('<<-- signin -->>');
        const { id: sub, ...res } = params.user;
        params.token = { sub, ...res };
      } else if (params.trigger === 'update' && params.session) {
        // console.log('<<-- update -->>');
        params.token.accessToken = params.session?.accessToken;
        params.token.refreshToken = params.session?.refreshToken;
      }

      return params.token;
    },
    async session(params) {
      // console.log('callback -> session');
      // console.log('params', params);
      if (params.token) {
        params.session.user.username = (params.token as any).username;
        params.session.user.sexType = (params.token as any).sexType;
        params.session.user.birthdate = (params.token as any).birthdate;
        params.session.user.telephone = (params.token as any).telephone;
        params.session.tokenType = (params.token as any).tokenType;
        params.session.accessToken = (params.token as any).accessToken;
        params.session.refreshToken = (params.token as any).refreshToken;
      }
      return params.session;
    },
  },
};
