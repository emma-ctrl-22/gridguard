import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import useNavigate from'@react-navigation/stack';

export default function useNavigate(props) {
    const navigation = useNavigate();
  return (
    <View>
        <Text>useNavigate</Text>
    </View>
  );
}


