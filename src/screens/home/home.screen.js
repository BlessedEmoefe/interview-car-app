import React from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {PageContainer, ContentContainer} from './home.styles';
import {Header} from '../../components/header/header.component';
import {Spacer} from '../../components/spacer/spacer.component';
import {RestrauntsBranchCard} from '../../components/restrauntsBranchCard/restrauntsBranchCard.component';
import {colors} from '../../infrastructure/theme/colors';
import {useFetch} from '../../components/hooks/useFetch';
import {View, Text} from 'react-native';
import {carMakeData} from '../data';

const Home = () => {
  return (
    <SafeArea>
      <PageContainer paddingHorizontal>
        <Header text="Car Makes" />
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={carMakeData}
          key={Math.random()}
          renderItem={({item}) => (
            <>
              <RestrauntsBranchCard
                image={item.image}
                branchName={item.carMake}
                
              />
              <Spacer size="large" position="top" />
            </>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
export default Home;