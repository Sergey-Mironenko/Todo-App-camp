import { create } from 'zustand';
import { UserType } from '~shared/services/types';

interface IUserStore {
  user: UserType | null;
}

const user: UserType = {
  id: '1',
  name: 'Sergey',
  email: 'serg2prime@gmail.com',
  password: 'Aboba',
  verificationToken: 'asADASdsdsa',
  activationToken: 'dasadasdsadasd',
  isVerified: false,
  isActivated: true,
}
export const useUsersStore = create<IUserStore>((set) => {
  return {
	user: user,
  };
});
