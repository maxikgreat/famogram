export interface User {
  // extend roles
  'https://portfolio-max.com/roles': string[],
  given_name: string,
  family_name: string,
  nickname: string,
  name: string,
  picture: string,
  locale: string,
  updated_at: string,
  email: string,
  email_verified: boolean,
  sub: string,
}

export type UserState = User | null;