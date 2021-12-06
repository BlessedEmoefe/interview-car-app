import React from 'react';
import {Spacer} from '../spacer/spacer.component';
import {useNavigation} from '@react-navigation/core';
import {
  HeaderCover,
  LeftSide,
  MenuIconWrapper,
  HeaderText,
  UserImage,
  RightSide,
} from './header.styles';
import {Arrow, Menu} from '../../assets/Icons';

export const Header = ({svg, text, source, paddingHorizontal, position}) => {
  const navigation = useNavigation();
  return (
    <HeaderCover
      flexDirection="row"
      paddingHorizontal={paddingHorizontal}
      position={position}>
      <LeftSide flexDirection="row" width="auto" justifyContent="flex-start">
        {svg == 'menu' ? (
          <MenuIconWrapper onPress={() => navigation.toggleDrawer()}>
            <Menu onPress={() => { }} />
          </MenuIconWrapper>
        ) : svg == 'previous' ? (
          <MenuIconWrapper onPress={() => navigation.goBack()}>
            <Arrow onPress={() => navigation.goBack()} />
          </MenuIconWrapper>
        ) : null}
        {svg && <Spacer size="medium" position="right" />}
        {text ? <HeaderText variant="smallTitle">{text}</HeaderText> : null}
      </LeftSide>
      {source ? (
        <RightSide
          onTouchStart={() => {
            navigation.navigate('CourierProfile');
          }}>
          <UserImage source={source} />
        </RightSide>
      ) : null}
    </HeaderCover>
  );
};

Header.defaultProps = {
  text: 'Header',
};
