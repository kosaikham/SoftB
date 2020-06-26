import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, FlatList } from 'react-native';
import { buttonColor, borderColor } from './../../libs/colorCode';
import Employee from '../../components/Employee';
import { Ionicons } from '@expo/vector-icons';

const employees = [
  {
    id: 1,
    name: 'One',
    jobTitle: 'Doctor',
    image: require('./../../assets/avatar-default.jpg'),
    email: 'xxx',
    department: 'xxx',
    costCenter: 'xxx',
  },
  {
    id: 2,
    name: 'Two',
    jobTitle: 'Doctor',
    image: require('./../../assets/avatar-default.jpg'),
    email: 'xxx',
    department: 'xxx',
    costCenter: 'xxx',
  },
  {
    id: 3,
    name: 'Three',
    jobTitle: 'Doctor',
    image: require('./../../assets/avatar-default.jpg'),
    email: 'xxx',
    department: 'xxx',
    costCenter: 'xxx',
  },
];

const MoreScreen = (props) => {
  const onPressEmployee = (employee) => {
    props.navigation.navigate('Profile', {
      employee,
      add: false,
    });
  };

  const onPressAdd = () => {
    props.navigation.navigate('Profile', {
      employee: null,
      add: true,
    });
  };

  return (
    <Container>
      <Text>Employee Listing</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 50,
          right: 20,
        }}
        onPress={onPressAdd}
      >
        <IconView>
          <Ionicons name="ios-add" size="36" color="#000" />
        </IconView>
      </TouchableOpacity>
      <Main>
        <FlatList
          data={employees}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Employee
                key={item.id}
                {...item}
                onPressEmployee={() => onPressEmployee(item)}
              />
            );
          }}
        />
      </Main>
    </Container>
  );
};

export default MoreScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: black;
  font-size: 24px;
  position: absolute;
  top: 100px;
  left: 20px;
`;
const Main = styled.View`
  margin-top: 150px;
  margin-left: 20px;
`;

const IconView = styled.View`
  width: 30px;
  height: 30px;
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
