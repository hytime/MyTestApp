import AigcIcon from '@/components/AigcIcon';
import MenuList from '@/components/MenuList';
import {MenuListType} from '@/components/MenuList/type';
import React, {useCallback, useState} from 'react';
import {
  Avatar,
  Box,
  Card,
  HStack,
  ScrollView,
  Text,
  View,
  useTheme,
} from 'native-base';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
} from 'react-native';

const menuListData: MenuListType[] = [
  {
    menuItemList: [
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
    ],
  },
  {
    menuItemList: [
      {title: '测试按钮', icon: '\ue60a'},
      {title: '测试按钮', icon: '\ue60a'},
    ],
  },
  {
    menuItemList: [
      {title: '系统', icon: '\ue6ea'},
      {title: '关于', icon: '\ue600'},
    ],
  },
];
export default function Mine() {
  const theme = useTheme();
  const [viewh, setViewh] = useState(0);
  const _onLayout = useCallback((e: any) => {
    const {x, y, width, height} = e.nativeEvent.layout;
    console.log(x, y, width, height);
    setViewh(height);
  }, []);

  return (
    <SafeAreaView
      // mode={'margin'}
      // edges={[left, right, top, bottom]}
      style={{
        backgroundColor: theme.colors.primary[500],
        height: '100%',
        paddingBottom: 0,
        marginBottom: 0,
      }}>
      <Box h={'100%'} onLayout={_onLayout}>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 2,
            backgroundColor: 'gray.100',
          }}
          h={viewh}
          bgColor={'primary.500'}
          // scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
            console.log(e.nativeEvent.contentSize.height, viewh);
          }}>
          <View bgColor={'gray.100'} height={viewh} mb={10}>
            <Card bgColor={'primary.500'} rounded={'none'}>
              <HStack alignItems={'center'} justifyContent={'flex-start'}>
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
            </Card>

            <Card bgColor={'white'} mx={'2'} mt={'2'}>
              <Box w={'full'}>
                <HStack
                  w={'full'}
                  space={'16'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Box>
                    <AigcIcon size="auto" fontSize={'25'} iconName={'\ue601'} />
                    <Text fontSize={'12'} fontWeight={'black'}>
                      余额
                    </Text>
                  </Box>
                  <Box>
                    <AigcIcon size="auto" fontSize={'25'} iconName={'\ue85c'} />
                    <Text fontSize={'12'} fontWeight={'black'}>
                      审查
                    </Text>
                  </Box>
                  <Box>
                    <AigcIcon size="auto" fontSize={'25'} iconName={'\ue742'} />

                    <Text fontSize={'12'} fontWeight={'black'}>
                      数据
                    </Text>
                  </Box>
                  <Box>
                    <AigcIcon size="auto" fontSize={'25'} iconName={'\ue60c'} />

                    <Text fontSize={'12'} fontWeight={'black'}>
                      接口
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Card>
            <Box marginX={'2'}>
              <MenuList dataSource={menuListData}></MenuList>
            </Box>
          </View>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
