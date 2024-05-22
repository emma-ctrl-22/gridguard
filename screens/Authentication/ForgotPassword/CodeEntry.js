// CodeEntry.js
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Pressable, Alert, useWindowDimensions } from 'react-native';
import SubmitButton from '../../../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';

export default function CodeEntry({ route }) {
    const { email, phone,nextScreen } = route.params;
    const [code, setCode] = useState('');
    const codeInputs = Array.from({ length: 6 }, () => useRef(null));
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    const handleCodeChange = (text, index) => {
        if (text.length > 1) {
            // Prevent entering more than one digit
            return;
        }
        setCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = text;
            return newCode.join('');
        });

        if (text === '' && index > 0) {
            // Focus on the previous input
            codeInputs[index - 1].current.focus();
        } else if (text !== '' && index < 5) {
            // Focus on the next input if a digit is entered
            codeInputs[index + 1].current.focus();
        }
    };

    const handleContinue = () => {
        if (code.length < 6) {
            Alert.alert('Error', 'Please enter the complete verification code');
        } else {
            Alert.alert('Success', 'Verification code accepted', [
                {
                    text: 'Continue',
                    onPress: () => {
                        if (nextScreen === 'ResetPass') {
                            navigation.navigate(nextScreen, { email });
                        } else if (nextScreen === 'ScreenOne') {
                            navigation.navigate(nextScreen);
                        }
                    },
                },
            ]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.headerText, isTablet && styles.tabletHeaderText]}>Reset password</Text>
            <Text style={[styles.subText, isTablet && styles.tabletSubText]}>
                Enter the 6 digit code we sent to your email {email || phone}
            </Text>
            <View style={styles.codeContainer}>
                {Array.from({ length: 6 }, (_, index) => (
                    <TextInput
                        key={index}
                        style={[styles.codeInput, isTablet && styles.tabletCodeInput]}
                        keyboardType='numeric'
                        maxLength={1}
                        onChangeText={(text) => handleCodeChange(text, index)}
                        value={code[index]}
                        ref={codeInputs[index]}
                    />
                ))}
            </View>
            <Pressable style={{ marginBottom: "20%" }} onPress={() => Alert.alert('Resend Code Pressed')}>
                <Text style={[styles.resendText, isTablet && styles.tabletResendText]}>Haven't received verification code yet?</Text>
                <Text style={[styles.resendText, isTablet && styles.tabletResendText, { textAlign: "center", color: "#02B2DD", textDecorationLine: "underline" }]}>
                    Resend Code
                </Text>
            </Pressable>
            <SubmitButton
                width="85%"
                height={50}
                text='Continue'
                color='#fff'
                bR={8}
                onPress={handleContinue}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: "30%",
    },
    tabletHeaderText: {
        fontSize: 30,
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        color: '#707070',
    },
    tabletSubText: {
        fontSize: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
    },
    codeInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 24,
        textAlign: 'center',
        width: 40,
        marginHorizontal: 5,
    },
    tabletCodeInput: {
        fontSize: 28,
        width: 50,
    },
    resendText: {
        color: '#000',
        marginVertical: 20,
        opacity: 0.5,
    },
    tabletResendText: {
        fontSize: 18,
    },
});
