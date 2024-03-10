import {AigcTabBarItem} from '@/components/AigcTabBar/type';
import AigcIcon from '@/components/AigcIcon';
import Home from '@/view/Home';
import Mine from '@/view/Mine';
import AddScreen from '@/view/Add';
export const tabBars: AigcTabBarItem[] = [
  {
    title: '首页',
    key: 'home',
    component: Home,
    icon: <AigcIcon iconName={'\ue6d3'} fontSize={20} />,
    activeIcon: (
      <AigcIcon iconName={'\ue6d3'} color={'#1296db'} fontSize={20} />
    ),
  },
  {
    title: '',
    key: 'add',
    component: AddScreen,
    icon: <AigcIcon iconName={'\ue61d'} fontSize={27} size={'auto'} />,
    activeIcon: (
      <AigcIcon
        iconName={'\ue61d'}
        color={'#1296db'}
        fontSize={27}
        size={'auto'}
      />
    ),
  },
  {
    title: '我的',
    key: 'mine',
    component: Mine,
    icon: <AigcIcon iconName={'\ue617'} fontSize={20} />,
    activeIcon: (
      <AigcIcon iconName={'\ue617'} color={'#1296db'} fontSize={20} />
    ),
  },
];
