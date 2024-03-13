import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreView from '@/view/More';
import AigcTabBar from '../../components/AigcTabBar';
import SetView from '@/view/Setting';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function StackRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={({route, navigation}) => ({headerShown: false})}>
        <Stack.Screen
          name="main"
          component={AigcTabBar}
          options={() => ({
            title: '首页',
            headerShown: false,
          })}
        />
        <Stack.Screen name="more" component={MoreView} />
        <Stack.Screen
          name="setting"
          component={SetView}
          options={{title: '设置'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
