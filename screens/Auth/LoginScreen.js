import React, { useState } from 'react';
import styled from 'styled-components';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  Alert,
} from 'react-native';
import Firebase from './../../libs/Firebase';
import { connect } from 'react-redux';
import { buttonColor, borderColor } from './../../libs/colorCode';

const mapDispatchToState = (dispatch) => {
  return {
    onSignIn: () => dispatch({ type: 'SIGN_IN' }),
  };
};

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    try {
      Keyboard.dismiss();
      const { user } = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
      const accessToken = await user.getIdToken();
      await AsyncStorage.setItem('userToken', accessToken);
      props.onSignIn();
    } catch (e) {
      Alert.alert('Error', e.message);
      console.log(e);
    }
  };

  const onChangeEmail = (v) => {
    setEmail(v.nativeEvent.text);
  };
  const onChangePassword = (v) => {
    setPassword(v.nativeEvent.text);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Main>
          <Logo source={require('./../../assets/icon.png')} />
          <TextInput
            onChange={onChangeEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            onChange={onChangePassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSubmit}>
            <Button>
              <ButtonText>Login</ButtonText>
            </Button>
          </TouchableOpacity>
        </Main>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default connect(null, mapDispatchToState)(LoginScreen);

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Main = styled.View`
  width: 350px;
  height: 400px;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -40px;
  width: 80px;
  height: 80px;
`;
const TextInput = styled.TextInput`
  width: 290px;
  height: 44px;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 20px;
`;
const Text = styled.Text`
  font-size: 15px;
  color: ${borderColor};
  font-style: italic;
  margin-bottom: 20px;
`;
const Button = styled.View`
  width: 290px;
  height: 50px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
`;
const ButtonText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: white;
`;
