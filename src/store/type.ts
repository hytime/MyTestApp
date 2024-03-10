import dayjs from 'dayjs';
export type UserInfoState = {
  account: string;
  isLogined: boolean;
  token: string;
};
export type UserLogin = {account: string; password: string};
export type UserInfoActions = {
  logOut: () => Promise<void>;
  login: (info: UserLogin) => Promise<void>;
  updatedUserInfo: (info: UserInfoState) => void;
};

export type YGContentItem = {
  id?: string;
  title: string;
  content: string;
  date?: dayjs.ConfigType;
  isTruncated?: boolean;
};
export type YGContentState = {
  ygContentList: YGContentItem[];
};

export type YGContentAction = {
  saveYgContent: (data: YGContentItem) => Promise<void>;
  updateYgContent: (data: YGContentItem) => Promise<void>;
  removeYgContent: (id: string) => Promise<void>;
  getYgContent: () => Promise<YGContentItem[]>;
};
