import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreView from '@/view/More';
import AigcTabBar from '../AigcTabBar';
import SetView from '@/view/Setting';
import {Text} from 'native-base';
import AigcIcon from '../AigcIcon';
const Stack = createNativeStackNavigator();
// const More = lazyLoad(lazy(() => import('@/view/More')));
export default function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={({route, navigation}) => ({})}>
      <Stack.Screen
        name="main"
        component={AigcTabBar}
        options={() => ({
          headerShown: false,
          title: '首页',
        })}
      />
      <Stack.Screen name="more" component={MoreView} />
      <Stack.Screen
        name="setting"
        component={SetView}
        options={{title: '设置'}}
      />
    </Stack.Navigator>
  );
}
