import React from 'react';
import {SafeArea} from '../utility/safe-area.component';
import {Container as PageContainer} from '../container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {ActivityIndicator} from 'react-native-paper';

export const Loader = () => {
  return (
    <SafeArea>
      <PageContainer
        paddingHorizontal
        justifyContent="center"
        style={{flex: 1}}>
        <ActivityIndicator
          animating={true}
          color={colors.primary}
          size="medium"
        />
      </PageContainer>
    </SafeArea>
  );
};
