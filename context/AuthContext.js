import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from './config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { sendOTP } from './utils/otpService';  // Assume this is a utility function for sending OTPs

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const sendVerificationCode = async (email, phone, method) => {
        try {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();  // Generate 6-digit OTP
            await sendOTP(method === 'email' ? email : phone, otp, method);  // Send OTP via email or phone
            return otp;
        } catch (err) {
            console.error(err);
            Alert.alert("Error", "Failed to send verification code. Please try again.");
            return null;
        }
    };

    const createUser = async (email, password, name, phone) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name,
                email,
                phone,
            });

            Alert.alert("Success", "Your account has been created!");
        } catch (err) {
            console.error(err);
            Alert.alert("Error", "Failed to create user. Please try again.");
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, sendVerificationCode, createUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
