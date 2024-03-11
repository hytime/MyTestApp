export type ListMenuItem = {
  title: string;
  icon?: string;
  onPress?:
    | ((params: {[params: string]: any} | any) => any | Promise<any>)
    | ((item?: any, toast?: any) => Promise<any> | any)
    | any;
};
export type MenuListType = {
  title: string;
  menuItemList: ListMenuItem[];
};
