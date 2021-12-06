import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

const calculateStatusBarHeight = () =>
  `${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.bg.white};
  ${({showStatusBar}) => showStatusBar && calculateStatusBarHeight()};
`;

SafeArea.defaultProps = {
  showStatusBar: false,
};
