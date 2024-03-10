import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      '50': '#a1deff',
      '100': '#7fd1fc',
      '200': '#60c2f7',
      '300': '#43b3f0',
      '400': '#22a6ed',
      '500': '#199adf',
      '600': '#1e8bc6',
      '700': '#207cad',
      '800': '#226d96',
      '900': '#235f80',
    },
  },
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
      },
    },
  },
});
