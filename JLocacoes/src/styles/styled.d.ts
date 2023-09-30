import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      WHITE: string;
      BACKGROUND_PRIMARY: string;
      BACKGROUND_SECUNDARY: string;
      PRIMARY: string;
      SECUNDARY: string;
      TERTIARY: string;
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
      FONT_PRIMARY: string;
      FONT_SECUNDARY: string;
    };
  }
}
