import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      WHITE: string;
      BACKGROUND_PRIMARY: string;
      BACKGROUND_SECUNDARY: string;
      BACKGROUND_TERTIARY: string;
      PRIMARY: string;
      SECUNDARY: string;
      FONT_PRIMARY: string;
      SUCCESS_PRIMARY: string;
      SUCCESS_TERTIARY: string;
      SUCCESS_SECUNDARY: string;
      ERROR_PRIMARY: string;
      ERROR_TERTIARY: string;
      ERROR_SECUNDARY: string;
      ALERT_PRIMARY: string;
      ALERT_SECUNDARY: string;
      ALERT_TERTIARY: string;
    };
    typography: {
      fontFamily: string;
    };
  }
}
