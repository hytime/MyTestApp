import {TouchableHighlight} from 'react-native';
import {MenuListType, ListMenuItem} from './type';
import {generateUUid} from '@/utils';
import {Box, Card, Text, useTheme} from 'native-base';
import AigcIcon from '../AigcIcon';

export default function MenuList(params: {
  dataSource: MenuListType[];
  toast?: any;
}) {
  const theme = useTheme();
  const MenuItem = ({list}: {list: ListMenuItem[]}) =>
    list.map(item => {
      return (
        <TouchableHighlight
          key={generateUUid()}
          underlayColor={theme.colors.coolGray[100]}
          onPress={() => {
            item.onPress(item, params.toast);
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
    });

  return (
    <>
      {params.dataSource.map(item => (
        <Box key={generateUUid()} w={'100%'}>
          <Text m={'2'} fontSize={'md'}>
            {item.title}
          </Text>
          <Card backgroundColor={'white'} mx={'0'} p={0}>
            <MenuItem list={item.menuItemList} />
          </Card>
        </Box>
      ))}
    </>
  );
}
