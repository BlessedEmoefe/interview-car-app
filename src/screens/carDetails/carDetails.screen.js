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

const CarDetails = ({route,navigation}) => {
  /*Integration code*/
  const {carMake} = route.params;
  const {data, error, loading} = useFetch(
    `https://parseapi.back4app.com/classes/Car_Model_List_${carMake}?limit=20`,
  );
  console.log(carMake)
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
        <Header text={`${carMake} Details`}/>
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={results}
          key={Math.random()}
          renderItem={({item}) => (
            <>
              <DetailsCard carMake={item.Make} carModel={item.Model} carYear={item.Year} />
              <Spacer size="large" position="top" />
            </>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
export default CarDetails;
