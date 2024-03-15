import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Center, Text, useTheme} from 'native-base';
// import AigcIcon from '@/components/AigcIcon';
import {tabBars} from '@/utils/tabBar.config';
const Tab = createBottomTabNavigator();

export default function AigcTabBar() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="home"
      detachInactiveScreens
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerTintColor: theme.colors.primary[500],
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.black,
      })}>
      {tabBars.map(item => {
        return (
          <Tab.Screen
            key={item.key}
            name={item.key}
            component={item.component}
            options={{
              headerShown: false,
              headerLeft: props => {
                return item.headerLeft ? <>{item.headerLeft(props)}</> : <></>;
              },
              headerRight: props => {
                return item.headerLeft ? <>{item.headerLeft(props)}</> : <></>;
              },
              headerTitle: props => {
                return item.headerTitle ? (
                  <>{item.headerTitle(props)}</>
                ) : (
                  <></>
                );
              },
              tabBarLabel: ({color}) => {
                return (
                  <Center>
                    <Text
                      fontSize={'12'}
                      size={'auto'}
                      fontWeight={'bold'}
                      color={color}>
                      {item.title}
                    </Text>
                  </Center>
                );
              },
              tabBarIcon: ({focused, color, size}) => {
                return <>{focused ? item.activeIcon : item.icon}</>;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
