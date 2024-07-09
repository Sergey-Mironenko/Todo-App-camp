import { create } from 'zustand';
import { STORAGE_KEYS } from '~shared/keys';
import { UserType } from '~shared/services/types';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IUserStore {
  user: UserType | null;
  isUserLoading: boolean;
  setUser: (offset: UserType) => void;
  setIsUserLoading: (offset: boolean) => void;
}

export const useUsersStore = create<IUserStore>()(persist(
  (set) => ({
	user: null,
	isUserLoading: false,
	setUser: (user: UserType | null) => {
	  if (!user) {
		  localStorage.removeItem(STORAGE_KEYS.ACCESSTOKEN);
	  }
	  
	  set((state) => {
		return { user };
	  });
	},
	  
	setIsUserLoading: (isUserLoading: boolean) => {
	  set((state) => {
		return { isUserLoading };
	  });
	},
  }), { name: 'User store' }
));
