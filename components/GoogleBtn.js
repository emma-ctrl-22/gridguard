import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import GoogleLogo from '../assets/GoogleIcon.svg';

export default function GoogleBtn({ onPress, title, isTablet }) {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        isTablet ? styles.tabletBtn : styles.mobileBtn,
      ]}
      onPress={onPress}
    >
      <GoogleLogo style={styles.glogo} />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderRadius: 5,
    marginTop: "4%",
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
  },
  mobileBtn: {
    width: "88%",
    height: 50,
  },
  tabletBtn: {
    width: "50%",
    height: 50,
  },
  btnText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000000",
  },
  glogo: {
    width: 25,
    height: 25,
  },
});
