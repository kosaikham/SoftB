import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { buttonColor, borderColor } from './../../libs/colorCode';

const ProfileScreen = (props) => {
  return (
    <Container>
      <Text>ProfileScreen</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Button>
          <ButtonText>Go Back</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};

export default ProfileScreen;

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
