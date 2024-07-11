import { useUsersStore } from "~store/user.store";

export const useUsersSelector = () => {
  const [user, isUserLoading, setUser, setIsUserLoading] = useUsersStore((state => [
    state.user, state.isUserLoading, state.setUser, state.setIsUserLoading
  ]));

  return {
    user,
    isUserLoading,
    setUser,
    setIsUserLoading,
  }
}
