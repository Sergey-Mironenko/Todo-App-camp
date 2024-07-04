import { useUsersStore } from "~store/user.store";

export const useUsersSelector = () => {
  const [user] = useUsersStore((state => [state.user]));

  return { user }
}