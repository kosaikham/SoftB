import React from 'react';
import styled from 'styled-components';

const Post = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
    </Container>
  );
};

export default Post;

const Container = styled.View`
  width: 350px;
  max-height: 170px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;
const Title = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 500;
`;
const Body = styled.Text`
  font-size: 17px;
  line-height: 24px;
`;
