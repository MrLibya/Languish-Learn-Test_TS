import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import { ExerciseProps } from '../types';

export type MainStackParamList = {
    Home: undefined;
    Exercises: ExerciseProps;
};

const MainStackNavigator = () => {
    const Stack = createNativeStackNavigator<MainStackParamList>();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // cardStyle: { backgroundColor: '#3c6c82' },
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Exercises" component={ExerciseScreen}
            // options={{ headerShown: true }} 
            />
        </Stack.Navigator>
    );
};


export default MainStackNavigator;