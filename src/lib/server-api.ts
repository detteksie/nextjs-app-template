import axios, { AxiosError } from 'axios';
import { getSession, signIn, signOut } from 'next-auth/react';

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error?.config!;
    // console.log('axios fetch error', error);
    if (
      error?.response?.status! === 401 &&
      (error.response?.data as any).message === 'jwt expired' &&
      !(originalRequest as any)._retry
    ) {
      console.log('interceptors - renew tokens');
      (originalRequest as any)._retry = true;

      /** get current session */
      const session = await getSession();
      // console.log('session', session);

      /** fetch refresh token */
      let refreshData = null;
      // console.log('originalRequest', originalRequest);
      // console.log('serverApi', serverApi);
      try {
        if (session) {
          await signIn('refresh-token', {
            redirect: false,
            tokenType: session.tokenType,
            refreshToken: session.refreshToken,
          });
          const newSession = await getSession();
          if (newSession) {
            refreshData = {
              tokenType: newSession.tokenType,
              accessToken: newSession.accessToken,
            };
          }
        }
        // console.log('refreshData', refreshData);
      } catch (err) {
        console.error('error fetching refresh-token', err);
        await signOut();
      }

      originalRequest.headers.Authorization = `${refreshData?.tokenType} ${refreshData?.accessToken}`;
      return serverApi(originalRequest);
    }

    return Promise.reject(error);
  },
);
