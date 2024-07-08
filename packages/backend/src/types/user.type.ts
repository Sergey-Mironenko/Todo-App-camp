export interface UserType {
  id: string,
  name: string,
  email: string,
  password: string,
  verificationToken: string | null,
  isVerified: boolean,
  activationToken: string | null,
  isActivated: boolean,
};
    