import {YGContentItem} from '@/store/type';
import {useYgContentStore} from '@/store/ygcontentStore';
import {dateToString} from '@/utils/dateUtils';
import {showSuccessToast} from '@/utils/toast';
import {useFocusEffect} from '@react-navigation/native';
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  TextArea,
  View,
  useToast,
} from 'native-base';
import {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function Home() {
  const toast = useToast();
  const ygContentStore = useYgContentStore();
  const [list, setList] = useState<YGContentItem[]>([
    {title: '用药', content: '今日用药', date: Date.now()},
  ]);
  const [refresh, setRefresh] = useState<number>(0);
  const delContent = useCallback(async (id: string) => {
    await ygContentStore.removeYgContent(id);
    // resfreshList();
    setRefresh(res => res + 1);
  }, []);
  const resfreshList = useCallback(() => {
    const fetchYglist = async () => {
      const list = await ygContentStore.getYgContent();
      console.log(list);
      if (list) setList(() => list);
      // setRefresh(false);
    };
    fetchYglist();
  }, [refresh]);
  useFocusEffect(resfreshList);
  return (
    <SafeAreaView>
      <ScrollView style={homeStyle.homeStyle}>
        <Center>
          <Stack
            space={1}
            direction={'column'}
            overflow={'scroll'}
            style={homeStyle.stackStyle}>
            {list.map((item, index) => (
              <Card key={index} flex={1} style={homeStyle.cardStyle}>
                <Box>
                  <Box
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'flex-end'}>
                    <Heading
                      size={'md'}
                      pl={1}
                      maxW={item.isTruncated ? 120 : '100%'}
                      isTruncated={item.isTruncated}
                      onPress={() => {
                        setList(arr => {
                          const newArr = arr.map(d => {
                            if (d.id == item.id) {
                              d.isTruncated = !d.isTruncated;
                            }
                            return d;
                          });
                          return newArr;
                        });
                      }}>
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={'xs'}
                      ml={'2'}
                      height={'auto'}
                      fontWeight={'medium'}
                      color={'dark.300'}>
                      {dateToString(item.date, 'YYYY-MM-DD')}
                    </Text>
                  </Box>
                  <Divider></Divider>
                  <Box mt={2} mb={'2'} pl={1} flexDirection={'column'}>
                    <Text>{item.content}</Text>
                  </Box>
                  <Button
                    onPress={async () => {
                      if (item.id) {
                        await delContent(item.id);
                        showSuccessToast(toast, '删除成功！');
                      }
                    }}>
                    删除
                  </Button>
                </Box>
              </Card>
            ))}
          </Stack>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}

const homeStyle = StyleSheet.create({
  homeStyle: {
    padding: 10,
    height: '100%',
  },
  stackStyle: {
    width: '100%',
    overflow: 'scroll',
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
