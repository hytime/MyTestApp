export type ListMenuItem = {
  title: string;
  icon: string;
  onPress?:
    | ((params: {[params: string]: any}) => any)
    | ((item?: any, toast?: any) => Promise<any>)
    | ((item?: any, toast?: any) => any)
    | any;
};
export type MenuListType = {
  title: string;
  menuItemList: ListMenuItem[];
};
