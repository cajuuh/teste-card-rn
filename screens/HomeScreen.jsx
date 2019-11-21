import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

import Card from "../components/Card";

import defaultStyles from "../constants/default-style";

const HomeScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Layout style={styles.alignment}>
        <Card />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25
  },
  alignment: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
