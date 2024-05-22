// RadioButtons.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

const RadioButtons = ({ phone, email, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option === 'option1' ? email : phone);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleOptionSelect('option1')}
      >
        <Ionicons
          name={selectedOption === 'option1' ? 'radio-button-on' : 'radio-button-off'}
          size={27}
          color={selectedOption === 'option1' ? '#02B2DD' : '#aaaaaa'}
        />
        <MaterialCommunityIcons name="email-multiple-outline" size={22} color="black" marginLeft={15} />
        <Text style={styles.label}>Via email | {email}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleOptionSelect('option2')}
      >
        <Ionicons
          name={selectedOption === 'option2' ? 'radio-button-on' : 'radio-button-off'}
          size={27}
          color={selectedOption === 'option2' ? '#02B2DD' : '#aaaaaa'}
        />
        <MaterialCommunityIcons name="tooltip-text-outline" size={22} color="black" marginLeft={15} />
        <Text style={styles.label}>Via SMS | +233 {phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontWeight:"500",
    fontSize:17
  },
  container:{
    width:300,
    height:80,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    marginTop:"15%",
    marginBottom:"10%"
  }
});

export default RadioButtons;
