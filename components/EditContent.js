import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ItemWidth = width - 50;

const EditContent = ({ employee }) => {
  return (
    <Container>
      <NameBox>
        <Name>Name</Name>
        <EditName value={employee.name} />
      </NameBox>
      <EmailBox>
        <Name>Email</Name>
        <EditEmail value={employee.email} />
      </EmailBox>
      <DepartmentBox>
        <Name>Department</Name>
        <EditDepartment value={employee.department} />
      </DepartmentBox>
      <CostBox>
        <Name>Cost Center</Name>
        <EditCost value={employee.costCenter} />
      </CostBox>
      <JobTitleBox>
        <Name>Job Title</Name>
        <EditJob value={employee.jobTitle} />
      </JobTitleBox>
    </Container>
  );
};

export default EditContent;

const Container = styled.View`
  width: ${ItemWidth};
`;
const NameBox = styled.View`
  flex-direction: column;
  width: 100%;
`;
const EmailBox = styled.View`
  flex-direction: column;
  width: 100%;
`;
const CostBox = styled.View`
  flex-direction: column;
  width: 100%;
`;
const DepartmentBox = styled.View`
  flex-direction: column;
  width: 100%;
`;
const JobTitleBox = styled.View`
  flex-direction: column;
  width: 100%;
`;
const Name = styled.Text`
  font-size: 20px;
`;
const EditJob = styled.TextInput`
  padding-left: 20px;
  font-size: 20px;
`;
const EditName = styled.TextInput`
  padding-left: 20px;
  font-size: 20px;
`;
const EditEmail = styled.TextInput`
  padding-left: 20px;
  font-size: 20px;
`;
const EditDepartment = styled.TextInput`
  padding-left: 20px;
  font-size: 20px;
`;
const EditCost = styled.TextInput`
  padding-left: 20px;
  font-size: 20px;
`;
