import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { buttonColor, borderColor } from './../../libs/colorCode';

const mapDispatchToState = (dispatch) => {
  return {
    onSignOut: () => dispatch({ type: 'SIGN_OUT' }),
  };
};

const MoreScreen = (props) => {
  const onPressLogout = async () => {
    await AsyncStorage.clear();
    props.onSignOut();
  };
  return (
    <Container>
      <Text>MoreScreen</Text>
      <TouchableOpacity onPress={onPressLogout}>
        <Button>
          <ButtonText>Logout</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};

export default connect(null, mapDispatchToState)(MoreScreen);

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 24px;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;
const Button = styled.View`
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${buttonColor};
`;
