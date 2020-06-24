import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screens/Auth/LoginScreen';
import ProtectedNavigator from './../Protected/ProtectedNavigator';
import { connect } from 'react-redux';
import LoadingScreen from '../../screens/LoadingScreen';

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    isLoading: state.isLoading,
  };
};

const Stack = createStackNavigator();

const AppNavigator = ({ isAuth, isLoading }) => {
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        {isAuth ? (
          <Stack.Screen
            name="Home"
            component={ProtectedNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps)(AppNavigator);
