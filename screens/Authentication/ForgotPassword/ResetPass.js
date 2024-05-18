import React, { useState, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Pressable, Alert } from 'react-native';
import SubmitButton from '../../../components/SubmitButton';

export default function ResetPass({ route, navigation }) {
    const { email } = route.params;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        // Logic to reset password
        Alert.alert('Success', 'Password reset successful');
        // Navigate to next screen or perform necessary actions
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Reset password</Text>
            <Text style={styles.subText}>
                Enter your new password and confirm to reset your password for {email}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />
            </View>
            <SubmitButton
                width="85%"
                height={50}
                text='Reset Password'
                color='#fff'
                bR={8}
                onPress={handleResetPassword}
            />
            <Pressable onPress={() => Alert.alert('View Terms and Conditions Pressed')}>
                <Text style={styles.termsText}>View our Terms and Conditions</Text>
            </Pressable>
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
    inputContainer: {
        width: '85%',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 20,
        paddingVertical: 10,
    },
    termsText: {
        marginTop: 20,
        color: '#02B2DD',
        textDecorationLine: 'underline',
    },
});
