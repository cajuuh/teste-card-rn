import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";

import IconText from "./IconText";
import BodyText from "./BodyText";
import BodyTextBold from "./BodyTextBold";

const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  return rndNum;
};

const CardHeader = props => {
  const discountValue = generateRandomBetween(10, 50);

  return (
    <Layout style={styles.size}>
      <Layout style={styles.topLeftContainer}>
        <Layout style={{ marginLeft: 10, backgroundColor: "#F2F2F2" }}>
          <IconText>t</IconText>
        </Layout>
        <BodyText style={styles.fontSize}>Guardar</BodyText>
      </Layout>
      <Layout style={styles.discountTextContainer}>
        <BodyTextBold style={styles.discountFont}>
          {discountValue}% off
        </BodyTextBold>
      </Layout>
      <Layout style={styles.topRightContainer}>
        <Layout style={{ marginRight: 10, backgroundColor: "#F2F2F2" }}>
          <IconText>y</IconText>
        </Layout>
        <BodyText style={styles.fontSize}>Favorito</BodyText>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  size: {
    flexDirection: "row",
    paddingStart: 15,
    paddingEnd: 15,
    width: "100%",
    height: 45,
    backgroundColor: "#F2F2F2",
    justifyContent: "space-between"
  },
  topLeftContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#F2F2F2"
  },
  discountTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2"
  },
  topRightContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#F2F2F2"
  },
  iconSubtitles: {
    fontSize: 8,
    backgroundColor: "#F2F2F2"
  },
  discountFont: {
    fontSize: 18
  }
});

export default CardHeader;
