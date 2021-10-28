import React from 'react';
import {Spacer} from '../spacer/spacer.component';
import {HeaderCover, LeftSide, HeaderText} from './header.styles';

export const Header = ({svg, text}) => {
  return (
    <HeaderCover>
      <LeftSide flexDirection="row" width="auto" justifyContent="flex-start">
        {svg}
        {svg && <Spacer size="medium" position="right" />}
        {text ? <HeaderText variant="title">{text}</HeaderText> : null}
      </LeftSide>
    </HeaderCover>
  );
};

Header.defaultProps = {
  text: 'Header',
};
