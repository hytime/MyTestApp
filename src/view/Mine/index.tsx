import AigcIcon from '@/components/AigcIcon';
import MenuList from '@/components/MenuList';
import {MenuListType} from '@/components/MenuList/type';
import React, {Fragment, useCallback, useEffect, useState} from 'react';
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
import {SafeAreaView} from 'react-native';

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
    <Fragment>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: theme.colors.primary[500],
        }}></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.gray[100],
          height: '100%',
          paddingBottom: 0,
          marginBottom: 0,
        }}>
        <Box h={'100%'} onLayout={_onLayout}>
          <ScrollView
            flex={1}
            style={[
              {
                height: viewh,
              },
            ]}
            scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor: 'gray.100',
            }}>
            <View
              backgroundColor={'primary.500'}
              position={'absolute'}
              w={'100%'}
              top={-viewh}
              left={0}
              right={0}
              bottom={viewh}
              height={viewh}
              zIndex={-1000}
              justifyContent={'flex-end'}
              alignItems={'center'}
              textAlign={'center'}>
              <Box>
                <Text textAlign={'center'} color={'white'}>
                  刷新...
                </Text>
              </Box>
            </View>
            <View backgroundColor={'primary.500'} w={'100%'} h={viewh}>
              <Card bgColor={'primary.500'} rounded={'none'}>
                <HStack alignItems={'center'} justifyContent={'flex-start'}>
                  <Avatar size={'lg'} bgColor={''}></Avatar>
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

              <View
                style={[{height: viewh}]}
                bgColor={'gray.100'}
                // height={viewh}
              >
                <Card bgColor={'white'} m={'2'}>
                  <Box w={'full'}>
                    <HStack
                      w={'full'}
                      space={'16'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Box>
                        <AigcIcon
                          size="auto"
                          fontSize={'25'}
                          iconName={'\ue601'}
                        />
                        <Text fontSize={'12'} fontWeight={'black'}>
                          余额
                        </Text>
                      </Box>
                      <Box>
                        <AigcIcon
                          size="auto"
                          fontSize={'25'}
                          iconName={'\ue85c'}
                        />
                        <Text fontSize={'12'} fontWeight={'black'}>
                          审查
                        </Text>
                      </Box>
                      <Box>
                        <AigcIcon
                          size="auto"
                          fontSize={'25'}
                          iconName={'\ue742'}
                        />

                        <Text fontSize={'12'} fontWeight={'black'}>
                          数据
                        </Text>
                      </Box>
                      <Box>
                        <AigcIcon
                          size="auto"
                          fontSize={'25'}
                          iconName={'\ue60c'}
                        />

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
            </View>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </Fragment>
  );
}
