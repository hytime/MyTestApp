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
  headerLeft?: (props: any) => any;
  headerRight?: (props: any) => any;
  headerTitle?: (props: any) => any;
};
