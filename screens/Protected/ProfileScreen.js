import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { buttonColor, borderColor } from './../../libs/colorCode';
import { connect } from 'react-redux';
import ViewContent from './../../components/ViewContent';
import EditContent from './../../components/EditContent';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const mapDisptchToState = (dispatch) => {
  return {
    onLogOut: () => dispatch({ type: 'SIGN_OUT' }),
  };
};

const ProfileScreen = (props) => {
  const { employee, add } = props.route.params;
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { image, setImage } = useState(
    require('./../../assets/avatar-default.jpg')
  );

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  useEffect(() => {
    setEdit(true);
    console.log(employee);
    // if (employee) {
    //   setImage(employee.image);
    // }
  }, []);

  const onPressLogout = async () => {
    await AsyncStorage.clear();
    props.onLogOut();
  };
  const onPressEdit = () => {
    setEdit(true);
  };
  const onPressAvatar = () => {
    // choose camera or gallery
    setIsOpen(true);
  };

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={onPressAvatar}>
          {selectedImage !== null ? (
            <Avatar
              source={{ uri: selectedImage.localUri }}
              resizeMode="contain"
            />
          ) : (
            <Avatar source={image} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressLogout}
          style={{
            position: 'absolute',
            bottom: 10,
          }}
        >
          <Logout>
            <LogoutText>LogOut</LogoutText>
          </Logout>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressEdit}
          style={{
            position: 'absolute',
            right: 20,
          }}
        >
          <Edit>
            <EditText>Edit</EditText>
          </Edit>
        </TouchableOpacity>
      </Header>
      {employee && (
        <Content>
          {edit ? (
            <EditContent employee={employee} />
          ) : (
            <ViewContent employee={employee} />
          )}
        </Content>
      )}

      {isOpen && (
        <ButtonList>
          <TouchableOpacity>
            <CameraButton>
              <TextCamera>Open Camera</TextCamera>
            </CameraButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <GalleryButton>
              <TextCamera>Open Gallery</TextCamera>
            </GalleryButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <GalleryButton>
              <TextCamera>Cancel</TextCamera>
            </GalleryButton>
          </TouchableOpacity>
        </ButtonList>
      )}
    </Container>
  );
};

export default connect(null, mapDisptchToState)(ProfileScreen);

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
`;

const Content = styled.View`
  flex: 2;
`;
const Logout = styled.View`
  width: 100px;
  height: 44px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
`;
const LogoutText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Edit = styled.View`
  width: 100px;
  height: 44px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
`;
const EditText = styled.Text`
  font-size: 16px;
  font-weight: 500;
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

const ButtonList = styled.View`
  width: 300px;
  padding: 10px;
`;
const CameraButton = styled.View`
  width: 100%;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const GalleryButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const TextCamera = styled.Text``;
