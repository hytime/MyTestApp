import {Text} from 'native-base';
import {PropsWithChildren} from 'react';
import {AigcIconType} from './type';

export default function AigcIcon(params: PropsWithChildren<AigcIconType>) {
  return (
    <Text
      {...params}
      style={{fontFamily: 'iconfont'}}
      size={params.size}
      color={params.color}>
      {params.iconName ? params.iconName : params.children}
    </Text>
  );
}
