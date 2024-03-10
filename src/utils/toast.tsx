import {Box, Text} from 'native-base';

const placement = 'top';
export const showErrorToast = (toast: any, msg: string) => {
  toast.show({
    placement,
    render: () => (
      <Box bg={'danger.500'} p={'3'} shadow={'3'} rounded={'xl'}>
        <Text color={'white'}>{msg}</Text>
      </Box>
    ),
  });
  // toast.close(id);
};

export const showSuccessToast = (toast: any, msg: string) => {
  toast.show({
    placement,
    render: () => (
      <Box bg={'success.500'} p={'3'} shadow={'3'} rounded={'xl'}>
        <Text color={'white'}>{msg}</Text>
      </Box>
    ),
  });
  // toast.close(id);
};

export const showWaringToast = (toast: any, msg: string) => {
  toast.show({
    placement,
    render: () => (
      <Box bg={'warning.500'} p={'3'} shadow={'3'} rounded={'xl'}>
        <Text color={'white'}>{msg}</Text>
      </Box>
    ),
  });
  // toast.close(id);
};

export const showInfoToast = (toast: any, msg: string) => {
  toast.show({
    placement,
    render: () => (
      <Box bg={'info.500'} p={'3'} shadow={'3'} rounded={'xl'}>
        <Text color={'white'}>{msg}</Text>
      </Box>
    ),
  });
  // toast.close(id);
};
