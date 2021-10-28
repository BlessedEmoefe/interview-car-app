import React from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {PageContainer, ContentContainer} from './carDetails.styles';
import {Header} from '../../components/header/header.component';
import {Spacer} from '../../components/spacer/spacer.component';
import { DetailsCard } from '../../components/detailsCard/detailsCard.component';
import {colors} from '../../infrastructure/theme/colors';
import {useFetch} from '../../components/hooks/useFetch';
import {View, Text} from 'react-native';
import {carMakeData} from '../data';

const CarDetails = ({carMake}) => {
  /*Integration code*/
  const {data, error, loading} = useFetch(
    `https://parseapi.back4app.com/classes/Car_Model_List_${carMake}?limit=20`,
  );
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  const {results} = data;
  console.log(results);
  return (
    <SafeArea>
      <PageContainer paddingHorizontal>
        <Header text="Car Details" />
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={carMakeData}
          key={Math.random()}
          renderItem={({item}) => (
            <>
              <DetailsCard carMake={"Yes"} carModel={"Yr"} carYear={"urf"} />
              <Spacer size="large" position="top" />
            </>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
export default CarDetails;
