import React from 'react';
import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const containerWidth = width - 40;

const Employee = (props) => {
  return (
    <Container>
      <TouchableOpacity onPress={props.onPressEmployee}>
        <Avatar source={props.image} />
        <Wrapper>
          <Name>{props.name}</Name>
          <JobTitle>{props.jobTitle}</JobTitle>
        </Wrapper>
      </TouchableOpacity>
    </Container>
  );
};

export default Employee;

const Container = styled.View`
  width: ${containerWidth};
  height: 80px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const Wrapper = styled.View`
  padding-left: 70px;
  height: 100%;
  justify-content: center;
`;
const Name = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const JobTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
