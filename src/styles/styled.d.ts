import 'styled-components';
import ligth from './themes/ligth';
import dark from './themes/dark';

declare module 'styled-components' {
  type ThemeType = typeof ligth;
  type ThemeType = typeof dark;

  export interface DefaultTheme extends ThemeType {}
}
