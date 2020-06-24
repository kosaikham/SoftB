import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

const mapDispatchToState = (dispatch) => {
  return {
    onSignIn: () => dispatch({ type: 'SIGN_IN' }),
    onSignOut: () => dispatch({ type: 'SIGN_OUT' }),
  };
};

const LoadingScreen = (props) => {
  useEffect(() => {
    (async function () {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      if (userToken) {
        props.onSignIn();
      } else {
        props.onSignOut();
      }
    })();
  }, []);

  return <Container />;
};

export default connect(null, mapDispatchToState)(LoadingScreen);

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
