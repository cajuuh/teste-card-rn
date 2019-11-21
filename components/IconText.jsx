import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-ui-kitten";

const IconText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "panton-icon-cr-regular",
    fontSize: 22
  }
});

export default IconText;
