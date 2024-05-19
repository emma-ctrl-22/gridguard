import React, { useState, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Pressable, Alert } from 'react-native';
import SubmitButton from '../../../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';

export default function CodeEntry({ route }) {
    const { email } = route.params;
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);
    const navigation = useNavigation();

    const handleCodeChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    
        // Check if the entered text is empty
        if (text === '' && index > 0) {
            // Focus on the previous input
            inputs.current[index - 1].focus();
        } else if (text !== '' && index < 5) {
            // Focus on the next input if a digit is entered
            inputs.current[index + 1].focus();
        }
    };
    

    const handleContinue = () => {
        if (code.some((digit) => digit === '')) {
            Alert.alert('Error', 'Please enter the complete verification code');
        } else {
            Alert.alert('Success', 'Verification code accepted', [
                {
                    text: 'Continue',
                    onPress: () => navigation.navigate('ResetPass', { email }),
                },
            ]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Reset password</Text>
            <Text style={styles.subText}>
                Enter the 6 digit code we sent to your email {email}
            </Text>
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.codeInput}
                        keyboardType='numeric'
                        maxLength={1}
                        onChangeText={(text) => handleCodeChange(text, index)}
                        value={digit}
                        ref={ref => inputs.current[index] = ref}
                    />
                ))}
            </View>
            <Pressable style={{ marginBottom: "20%" }} onPress={() => Alert.alert('Resend Code Pressed')}>
                <Text style={styles.resendText}>Haven't received verification code yet?</Text>
                <Text style={{ textAlign: "center", color: "#02B2DD", textDecorationLine: "underline" }}>
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
        marginTop: "30%"
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        color: '#707070',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90
    },
    codeInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 24,
        textAlign: 'center',
        width: 40,
        marginHorizontal: 5,
    },
    resendText: {
        color: '#000',
        marginVertical: 20,
        opacity: 0.5,
    },
});
