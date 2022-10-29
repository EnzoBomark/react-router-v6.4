import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@styles/global";
import { useTheme } from "./hooks/useTheme";

export const Theme: React.FC<PropsWithChildren> = (props) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};
