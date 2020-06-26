import React from 'react';
import styled from 'styled-components';

const ViewContent = (props) => {
  return (
    <Container>
      <NameBox>
        <Name>Name</Name>
        <Text>{props.name}</Text>
      </NameBox>
      <EmailBox>
        <Name>Email</Name>
        <Text>{props.email}</Text>
      </EmailBox>
      <DepartmentBox>
        <Name>Department</Name>
        <Text>{props.department}</Text>
      </DepartmentBox>
      <CostBox>
        <Name>Cost Center</Name>
        <Text>{props.costCenter}</Text>
      </CostBox>
      <JobTitleBox>
        <Name>Job Title</Name>
        <Text>{props.jobTitle}</Text>
      </JobTitleBox>
    </Container>
  );
};

export default ViewContent;

const Container = styled.View``;
const NameBox = styled.View``;
const EmailBox = styled.View``;
const CostBox = styled.View``;
const DepartmentBox = styled.View``;
const JobTitleBox = styled.View``;
const Name = styled.Text``;
const Text = styled.Text``;
