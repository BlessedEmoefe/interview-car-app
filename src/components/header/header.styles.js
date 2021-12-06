import styled from 'styled-components/native';
import {Text} from '../../components/typography/text.component';
import {colors} from '../../infrastructure/theme/colors';
import {fontWeights, fontSizes} from '../../infrastructure/theme/fonts';
import {Container, PressableContainer} from '../container/container.component';

export const HeaderCover = styled(Container)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  position: ${props => (props.position ? props.position : 'relative')};
  z-index: 2;
`;

export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;

export const LeftSide = styled(Container)``;

export const MenuIconWrapper = styled(PressableContainer)`
  border-radius: 26px;
  padding: 10px;
`;
export const RightSide = styled(Container)`
  width: 36;
  height: 36;
  border-radius: 36;
  overflow: hidden;
  border: 1px solid ${colors.primary};
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
`;
