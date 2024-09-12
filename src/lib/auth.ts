/* eslint-disable no-unused-vars */
import { randomBytes, randomUUID } from 'crypto';

import { AxiosResponse } from 'axios';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { SuccessJSON } from '|/@types';
import { LoginRequest, LoginResponse } from '|/@types/server/auth';
import { Profile } from '|/@types/server/default';

import { serverApi } from './server-api';

const accessToken = async (credentials: Record<'userSession' | 'password', string>) => {
  try {
    const respToken = await serverApi.post<
      SuccessJSON<LoginResponse>,
      AxiosResponse<SuccessJSON<LoginResponse>>,
      LoginRequest
    >('/login', {
      userSession: credentials?.userSession!,
      password: credentials?.password!,
    });
    return respToken;
  } catch (err) {
    console.error('fail - login');
    throw new Error('CredentialsSignin');
  }
};

const refreshToken = async (credentials: Record<'tokenType' | 'refreshToken', string>) => {
  try {
    const respToken = await serverApi.post<
      SuccessJSON<LoginResponse>,
      AxiosResponse<SuccessJSON<LoginResponse>>
    >(
      '/refresh-token',
      {},
      {
        headers: { Authorization: `${credentials?.tokenType} ${credentials?.refreshToken}` },
      },
    );
    return respToken;
  } catch (err) {
    console.error('fail - refresh token');
    throw new Error('Refresh Token');
  }
};

const profile = async (token: AxiosResponse<SuccessJSON<LoginResponse>>) => {
  try {
    const respProfile = await serverApi.get<SuccessJSON<Profile>>('/profile', {
      headers: {
        Authorization: `${token?.data?.result?.tokenType} ${token?.data?.result?.accessToken}`,
      },
    });
    return respProfile;
  } catch (err) {
    console.error('fail - fetch profile');
    throw new Error('CredentialsSignin');
  }
};

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'access-token',
      name: 'AccessToken',
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
        const respToken = await accessToken(credentials!);
        const respProfile = await profile(respToken);

        // If no error and we have user data, return it
        if (respProfile?.data?.result) {
          return { ...respProfile?.data?.result, ...respToken?.data?.result };
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
        const respToken = await refreshToken(credentials!);
        const respProfile = await profile(respToken);

        // If no error and we have user data, return it
        if (respProfile?.data) {
          return { ...respProfile?.data?.result, ...respToken?.data?.result };
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
        const token = params.token as any;
        params.session.user.username = token.username;
        params.session.user.sexType = token.sexType;
        params.session.user.birthdate = token.birthdate;
        params.session.user.telephone = token.telephone;
        params.session.tokenType = token.tokenType;
        params.session.accessToken = token.accessToken;
        params.session.refreshToken = token.refreshToken;
      }
      return params.session;
    },
  },
};
