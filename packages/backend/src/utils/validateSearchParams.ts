import { Privacy, Status } from "../types/searchParams.type";

const statusOptions: Status = {
  completed: true,
  active: false,
};

const privacyOptions: Privacy = {
  private: true,
  public: false,
};

export const validateStatus = (str: string) => {
  if (Object.keys(statusOptions).includes(str)) {
    return statusOptions[str as keyof Status];
  }

  return null;
}

export const validatePrivacy = (str: string) => {
  if (Object.keys(privacyOptions).includes(str)) {
    return privacyOptions[str as keyof Privacy];
  }

  return null;
}
