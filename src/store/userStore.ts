import {create} from 'zustand';
import {UserInfoActions, UserInfoState} from './type';
export const useUserStore = create<UserInfoState & UserInfoActions>(set => ({
  account: 'hytiime',
  token: '',
  isLogined: false,
  login: async info => {
    set(() => info);
  },
  updatedUserInfo: (info: UserInfoState) => {
    set(() => info);
  },
  logOut: async () => {
    set(() => ({
      account: '',
      token: '',
      isLogined: false,
    }));
  },
}));
