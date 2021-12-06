import React, { useState } from "react";
import { View, Image } from "react-native";
import {
  SearchBarContainer,
  SearchBarWrapper,
  StyledSearchbar,
  IconContainer,
  BargeContainer,
} from "./searchBar.styles";
import Chart from "react-native-vector-icons/AntDesign";

import { Badge } from "react-native-paper";
import Filter from "react-native-vector-icons/Ionicons";
import { Spacer } from "../spacer/spacer.component";
export const SearchBar = ({
  sort,
  cart,
  onPress,
  Number,
  searchQuery,
  setSearchQuery,
}) => {
  const onChangeSearch = query => setSearchQuery(query);
  // const chart = true

  return (
    <SearchBarContainer>
      <SearchBarWrapper flexDirection="row" justifyContent="center">
        <StyledSearchbar
          placeholder="Search Car Make"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Spacer size="small" position="right" />
        {cart ? (
          <IconContainer onPress={onPress} background="transparent">
            <Chart name="shoppingcart" size={27} />
            <BargeContainer>
              <Badge>{Number}</Badge>
            </BargeContainer>
          </IconContainer>
        ) : sort ? (
          <IconContainer onPress={onPress}>
            <Filter name="filter" size={24} />
          </IconContainer>
        ) : null}
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
