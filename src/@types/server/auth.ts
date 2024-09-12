export type LoginRequest = {
  userSession: string;
  password: string;
};

export type LoginResponse = {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
};
