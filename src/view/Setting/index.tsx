import AigcIcon from '@/components/AigcIcon';
import ListMenu from '@/components/MenuList';
import {generateUUid} from '@/utils';
import {removeItem} from '@/utils/asyncStorage';
import {YG_CONTENT} from '@/utils/const';
import {showInfoToast, showSuccessToast} from '@/utils/toast';
import {Box, Card, Container, Text, useToast} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {MenuListType} from '@/components/MenuList/type';
const initData = [
  {
    title: '清除数据',
    icon: '\ue671',
    onPress: async (item: any, toast: any) => {
      await removeItem(YG_CONTENT);
      showSuccessToast(toast, `清除${YG_CONTENT}数据成功`);
    },
  },
  {
    title: '测试数据',
    icon: '\ue742',
    onPress: async (item: any, toast: any) => {
      await showInfoToast(toast, '测试数据');
    },
  },
];
export default function Setting() {
  const initListMenu: MenuListType[] = [
    {title: '基本操作', menuItemList: initData},
  ];
  const [list, setList] = useState<MenuListType[]>();
  useEffect(() => {
    setList(initListMenu);
  }, []);
  return (
    <SafeAreaView>
      <ListMenu dataSource={list}></ListMenu>
    </SafeAreaView>
  );
}
