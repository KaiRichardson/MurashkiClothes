import React from 'react';
import styled from 'styled-components';

import AddProducts from './AddProducts';
import EditProducts from './EditProducts';

interface Props {}

const AdminDashboard: React.FC<Props> = () => (
  <Wrapper>
    <AddProducts />
    <EditProducts />
  </Wrapper>
);

export default AdminDashboard;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
