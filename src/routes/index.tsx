import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38' },
        }}
    >
        <Auth.Screen name="signin" component={SignIn} />
        <Auth.Screen name="signup" component={Signup} />
    </Auth.Navigator>
);

export default AuthRoutes;
