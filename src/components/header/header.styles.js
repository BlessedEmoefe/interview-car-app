import styled from 'styled-components/native';
import {Text} from '../../components/typography/text.component';
import {colors} from '../../infrastructure/theme/colors';
import {fontWeights} from '../../infrastructure/theme/fonts';
import {Container} from '../container/container.component';

export const HeaderCover = styled(Container)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding-vertical:12px;
`;

export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;

export const LeftSide = styled(Container)``;
