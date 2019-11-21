import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-ui-kitten";

const BodyText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "panton-regular"
  }
});

export default BodyText;
