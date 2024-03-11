import MenuList from '@/components/MenuList';
import {MenuListType} from '@/components/MenuList/type';
import {Avatar, Box, Card, HStack, ScrollView, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
const menuListData: MenuListType[] = [
  {
    title: '测试标题',
    menuItemList: [
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
    ],
  },
  {
    title: '测试标题',
    menuItemList: [
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
    ],
  },
  {title: '测试标题', menuItemList: [{title: '测试按钮', icon: '\ue60a'}]},
  {title: '测试标题', menuItemList: [{title: '测试按钮', icon: '\ue60a'}]},
];
export default function Mine() {
  return (
    <SafeAreaView>
      <Card backgroundColor={'white'} m={'2'} mb={0}>
        <HStack alignItems={'center'}>
          <Avatar size={'lg'}></Avatar>
          <Box ml={'5'}>
            <Text mb={'2'} fontSize={'lg'}>
              account
            </Text>
            <Text isTruncated={true} w={'2/3'}>
              介绍介绍介绍介绍介绍介绍介绍
            </Text>
          </Box>
        </HStack>
        <Box></Box>
      </Card>
      <Box marginX={'2'}>
        <ScrollView>
          <MenuList dataSource={menuListData}></MenuList>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
