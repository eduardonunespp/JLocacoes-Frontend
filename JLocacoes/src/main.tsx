import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
