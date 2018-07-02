import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => (
  <DefaultInput
    placeholder="Place Name"
    value={props.placeName.value}
    valid={props.placeName.valid}
    touched={props.placeName.touched}
    onChangeText={props.onChangeText}
  />
);

export default placeInput;
