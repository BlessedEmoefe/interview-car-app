import { DefaultTheme } from "@react-navigation/native";
import { theme } from ".";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: theme.colors.white,
    black: theme.colors.black.strong,
    activeColor: theme.colors.blue.strong,
  },
};
