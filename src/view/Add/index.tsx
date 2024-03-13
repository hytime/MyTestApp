import {useYgContentStore} from '@/store/ygcontentStore';
import {showErrorToast, showSuccessToast} from '@/utils/toast';
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Card,
  Input,
  KeyboardAvoidingView,
  Text,
  TextArea,
  Toast,
  useToast,
} from 'native-base';
import {useCallback, useEffect, useState} from 'react';
import {
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Add() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const ygContentStore = useYgContentStore();
  const toast = useToast();
  const onInputTitle = useCallback((text: string) => {
    setTitle(() => text);
  }, []);
  const onInputContent = useCallback((text: string) => {
    setContent(() => text);
  }, []);
  const onYgPress = useCallback(async () => {
    if (!title && !title.trim()) {
      showErrorToast(toast, '标题不能为空');
      return;
    }
    if (!content && !content.trim()) {
      showErrorToast(toast, '内容不能为空');
      return;
    }
    if (title && content && title.trim() && content.trim()) {
      await ygContentStore.saveYgContent({title: title, content: content});
      setContent(() => '');
      setTitle(() => '');
      showSuccessToast(Toast, '保存成功！');
      navigation.navigate('home');
    }
  }, [title, content, ygContentStore, toast]);
  useEffect(() => {
    // console.log('title', title);
    // console.log('con', content);
  }, [content, title]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.addView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Card m={'3'} p={2} backgroundColor={'white'}>
            <Box
              flexDirection={'row'}
              alignContent={'center'}
              alignSelf={'center'}
              alignItems={'center'}>
              <Text flex={1} fontSize={'sm'} size={'auto'} fontWeight={'bold'}>
                标题：
              </Text>
              <Box flex={5}>
                <Input
                  variant={'underlined'}
                  value={title}
                  fontWeight={'bold'}
                  fontSize={'sm'}
                  onChangeText={onInputTitle}></Input>
              </Box>
            </Box>

            <Box flexDirection={'column'} mb={'1.5'}>
              <Text fontWeight={'bold'}>内容：</Text>
              <TextArea
                autoCompleteType
                placeholder="请输入内容"
                h={'2/3'}
                w={'100%'}
                value={content}
                onChangeText={onInputContent}
              />
              <Box marginTop={'4'}>
                <Button w={'100%'} onPress={onYgPress}>
                  添加
                </Button>
              </Box>
            </Box>
          </Card>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({addView: {marginBottom: 50}});
