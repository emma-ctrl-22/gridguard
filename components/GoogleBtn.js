import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import GoogleLogo from '../assets/GoogleIcon.svg';

export default function GoogleBtn({ onPress, title, isTablet, width, height }) {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { width: width || (isTablet ? windowWidth * 0.5 : windowWidth * 0.88), height: height || 50 },
      ]}
      onPress={onPress}
    >
      <GoogleLogo width={25} height={25} style={styles.glogo} />
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
  btnText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000000",
  },
  glogo: {
    marginRight: 10,
  },
});
