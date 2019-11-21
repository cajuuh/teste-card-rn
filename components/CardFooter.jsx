import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";
import BodyText from "./BodyText";
import IconText from "./IconText";

const CardFooter = props => {
  return (
    <Layout style={styles.size}>
      <Layout style={styles.activationTextContainer}>
        <BodyText>Ativar cupom</BodyText>
      </Layout>
      <Layout style={styles.shareIconContainer}>
        <IconText>o</IconText>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  size: {
    flexDirection: "row",
    paddingStart: 15,
    height: 45,
    justifyContent: "space-between",
    backgroundColor: "#D7D7D7",
    borderBottomRightRadius: 15
  },
  activationTextContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D7D7D7"
  },
  shareIconContainer: {
    width: "30%",
    backgroundColor: "#AAAAAA",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 15
  }
});

export default CardFooter;
