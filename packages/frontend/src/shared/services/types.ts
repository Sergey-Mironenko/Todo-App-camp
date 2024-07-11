export interface TodoType {
  id?: string,
  userId: string,
  userName: string,
  title: string,
  text: string,
  isCompleted?: boolean,
  isPprivate?: boolean,
};

export interface UserType {
  id?: string,
  name: string,
  email: string,
  password: string,
  verificationToken: string,
  activationToken: string,
  isVerified: boolean,
  isActivated: boolean,
};

export enum Status {
  completed = 'completed',
  active = 'active',
};

export enum Privacy {
  private = 'private',
  public = 'public',
};

  