import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      /** The user's postal address. */
      id: string;
      username: string;
      sexType?: string | null;
      birthdate?: string | null;
      telephone?: string | null;
    };
    tokenType: string;
    accessToken: string;
    refreshToken: string;
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    picture?: string | null;
    sexType?: string | null;
    birthdate?: string | null;
    telephone?: string | null;
  }

  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    sub: string;
    name: string;
    username: string;
    email: string;
    picture?: string | null;
    sexType?: string | null;
    birthdate?: string | null;
    telephone?: string | null;

    accessToken: string;
    refreshToken: string;
  }
}
