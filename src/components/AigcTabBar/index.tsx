import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Center, HStack, IconButton, Text} from 'native-base';
import AigcIcon from '@/components/AigcIcon';
import {tabBars} from '@/utils/tabBar.config';
import {useNavigation} from '@react-navigation/native';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const Tab = createBottomTabNavigator();

export default function AigcTabBar() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#1296db',
        tabBarInactiveTintColor: '#000000',
        headerPressColor: '#1296db',
        headerTintColor: '#000000',
        tabBarStyle: {position: 'relative', bottom: 0},
      })}>
      {tabBars.map(item => {
        return (
          <Tab.Screen
            key={item.key}
            name={item.key}
            component={item.component}
            options={{
              headerRight: props => {
                return (
                  <IconButton
                    size={'sm'}
                    variant={'link'}
                    color="#1296db"
                    icon={
                      <AigcIcon
                        size={'auto'}
                        fontSize={'20'}
                        iconName={'\ue62c'}
                      />
                    }
                    onPress={() => {
                      navigation.navigate('setting');
                    }}
                  />
                );
              },
              headerTitle: () => (
                <HStack alignContent={'flex-end'} alignItems={'flex-end'}>
                  <Text size={'auto'} fontSize={'md'} fontWeight={'bold'}>
                    {item.title}
                  </Text>
                </HStack>
              ),
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
