import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";

import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

import BodyText from "./BodyText";

const Card = props => {
  return (
    <Layout style={styles.size}>
      <Layout style={styles.cardHeaderContainer}>
        <CardHeader />
      </Layout>
      <ScrollView>
        <BodyText>coisas</BodyText>
      </ScrollView>
      <Layout style={styles.cardFooterContainer}>
        <CardFooter />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  size: {
    width: 350,
    height: 200,
    borderRadius: 15,
    elevation: 3
  },
  cardHeaderContainer: {
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2"
  },
  cardFooterContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#D7D7D7"
  }
});

export default Card;
