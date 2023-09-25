import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import GlobalStyles from './styles/global'
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ThemeProvider>
);
