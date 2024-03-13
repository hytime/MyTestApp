export type AigcTabBarsType = {
  dataSource: Array<AigcTabBarItem>;
};
export type AigcTabBarItem = {
  title: any;
  icon?: any;
  activeIcon?: any;
  key: string;
  component: any;
  activeColor?: string;
  inActiveColor?: string;
  showHeder?: boolean;
};
