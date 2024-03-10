import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function setItem(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
    Alert.alert('保存错误！！');
  }
}
export async function getItem(key: string) {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    } else {
      throw new Error(`当前${key}数据不存在，请创建数据`);
    }
  } catch (err: any) {
    console.error(err);
    Alert.alert(err.message);
    return [];
  }
}

export async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(err);
    Alert.alert(`删除${key}数据错误`);
  }
}
