import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import Post from './../../components/Post';
import reducer from '../../reducer/reducer';

const posts = [
  {
    id: 1,
    title: 'React Native',
    body:
      'Facebook released React Native in 2015 and has been maintaining it ever since.',
  },
  {
    id: 2,
    title: 'React Native',
    body:
      'React Native is a best-in-class JavaScript library for building user interfaces.',
  },
  {
    id: 3,
    title: 'Design System',
    body:
      'Complete guide to designing a site using a collaborative and powerful design system.',
  },
];

const HomeScreen = (props) => {
  const onPressAvatar = () => {
    props.navigation.navigate('Profile', {
      employee: null,
    });
  };
  return (
    <Container>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <>
              <Header>
                <TouchableOpacity
                  onPress={onPressAvatar}
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 20,
                    zIndex: 3,
                  }}
                >
                  <Avatar
                    source={require('./../../assets/avatar-default.jpg')}
                  />
                </TouchableOpacity>
                <Title>Home</Title>
              </Header>
            </>
          }
          data={posts}
          renderItem={({ item }) => {
            return <Post {...item} />;
          }}
          keyExtractor={(post) => post.id.toString()}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Header = styled.View`
  justify-content: center;
  height: 70px;
  margin-bottom: 50px;
`;
const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  padding-left: 100px;
  color: #697186;
`;
const Text = styled.Text``;
