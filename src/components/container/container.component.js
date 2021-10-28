import React from "react";
import styled from "styled-components/native";
import { View, ScrollView, FlatList, Pressable } from "react-native";

export const Container = styled.View`
  width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "auto")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  padding-horizontal: ${(props) => (props.paddingHorizontal ? "4%" : "0")};
  padding-vertical: ${(props) =>
    props.paddingVertical ? props.paddingVertical : "0"};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  height: 200;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-horizontal: ${(props) => (props.paddingHorizontal ? "4%" : "0")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
`;

export const FlatListContainer = styled.FlatList`
  padding-vertical: 3;
  height: auto;
  /* flex:1; */
  width: ${(props) => (props.width ? props.width : "100%")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
`;

export const PressableContainer = styled.Pressable``;

ScrollViewContainer.defaultProps = {
  showsVerticalScrollIndicator: false,
};

PressableContainer.defaultProps = {
  onPress: () => console.log("yes tess"),
  style: ({ pressed }) => [
    {
      backgroundColor: pressed ? "#F2F2F2" : "transparent",
      opacity: pressed ? 0.9 : 1,
    },
  ],
};
