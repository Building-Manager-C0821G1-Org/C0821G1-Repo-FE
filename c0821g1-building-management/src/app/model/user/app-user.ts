export interface AppUser {
  id: number;
  password: string;
  isEnable: boolean;
  deleted: boolean;
  verificationCode: string;
  username: string;
}
