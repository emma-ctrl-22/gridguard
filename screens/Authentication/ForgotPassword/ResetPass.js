import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Pressable, Alert, useWindowDimensions } from 'react-native';
import SubmitButton from '../../../components/SubmitButton';
import LockIcon from '../../../assets/LockIcon.svg'; 

export default function ResetPass({ route, navigation }) {
    const { email } = route.params;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

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
            <LockIcon width={200} height={200} style={styles.icon} />
            <Text style={[styles.headerText, isTablet && styles.tabletHeaderText]}>Reset your password</Text>
            <Text style={[styles.subText, isTablet && styles.tabletSubText]}>
                Enter your new password and confirm to reset your password for {email}
            </Text>
            <View style={[styles.inputContainer, isTablet && styles.tabletInputContainer]}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm new Password"
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
            <Pressable style={{ marginTop: "4%" }} onPress={() => Alert.alert('View Terms and Conditions Pressed')}>
                <Text style={styles.termsText}>By continuing you agree to our {`\n`} Terms & Conditions</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: "25%"
    },
    icon: {
        marginTop: "5%",
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: "10%",
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
        height: '20%',
        marginBottom: 20,
        justifyContent: "space-between",
    },
    input: {
        borderWidth: 1,
        borderColor: '#c0c0c0',
        fontSize: 16,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    termsText: {
        marginTop: 20,
        color: '#c0c0c0',
        textDecorationLine: 'underline',
        textAlign: "center"
    },
    tabletHeaderText: {
        fontSize: 28,
        marginTop: "15%",
    },
    tabletSubText: {
        fontSize: 18,
        marginVertical: 30,
    },
    tabletInputContainer: {
        marginTop: 30,
    },
});
