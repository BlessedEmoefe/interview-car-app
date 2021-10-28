import React, {useState} from 'react';
import {Spacer} from '../spacer/spacer.component';
import {colors} from '../../infrastructure/theme/colors';
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  Title,
  SubText,
} from './detailsCard.styles';
import Toyota from '../../assets/toyota.jpg';

export const DetailsCard = ({carMake, carModel, carYear}) => {
  return (
    <MultiPurposeCardContainer
      height={110}
      background={colors.white}
      flexDirection="row"
      justifyContent="space-between">
      <InfoSection>
        <Wrapper alignItems="flex-start">
          <Title variant="title">Model: {carModel}</Title>
        </Wrapper>
        <Spacer size="medium" position="top" />
        <Wrapper alignItems="flex-start">
          <SubText variant="body">Make: {carMake}</SubText>
        </Wrapper>
        <Wrapper alignItems="flex-start">
          <SubText variant="body">Year: {carYear}</SubText>
        </Wrapper>
      </InfoSection>
    </MultiPurposeCardContainer>
  );
};

DetailsCard.defaultProps = {
  carMake: 'Hyuindi',
  carModel: 'Hyuindi',
  carYear: '2018',
};
