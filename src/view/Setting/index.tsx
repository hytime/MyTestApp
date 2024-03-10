import AigcIcon from '@/components/AigcIcon';
import {generateUUid} from '@/utils';
import {removeItem} from '@/utils/asyncStorage';
import {YG_CONTENT} from '@/utils/const';
import {showInfoToast, showSuccessToast} from '@/utils/toast';
import {Box, Card, Container, Text, useTheme, useToast} from 'native-base';
import {useState} from 'react';
import {SafeAreaView, TouchableHighlight} from 'react-native';
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
  const theme = useTheme();
  const toast = useToast();
  const [list, setList] = useState(initData);
  return (
    <SafeAreaView>
      <Text m={'2'} fontSize={'md'}>
        基本操作
      </Text>
      <Card backgroundColor={'white'} mx={'0'} p={0}>
        {list.map(item => {
          return (
            <TouchableHighlight
              key={generateUUid()}
              underlayColor={theme.colors.coolGray[100]}
              onPress={() => {
                item.onPress(item, toast);
              }}>
              <Box p={'0'} pb={'0'} w={'full'}>
                <Box
                  w={'full'}
                  flexDir={'row'}
                  py={'15'}
                  pl={'2'}
                  borderBottomWidth={'1'}
                  borderBottomStyle={'groove'}
                  borderBottomColor={'gray.100'}
                  alignContent={'center'}
                  alignItems={'center'}>
                  <AigcIcon
                    size="auto"
                    fontSize={'md'}
                    iconName={item.icon}></AigcIcon>
                  <Box ml={'1'}>
                    <Text fontSize={'md'} color={'gray.900'}>
                      {item.title}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </TouchableHighlight>
          );
        })}
      </Card>
    </SafeAreaView>
  );
}
