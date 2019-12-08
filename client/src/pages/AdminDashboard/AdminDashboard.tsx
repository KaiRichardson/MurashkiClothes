import React from 'react';

import AddProducts from './AddProducts';
import EditProducts from './EditProducts';

interface Props {}

const AdminDashboard: React.FC<Props> = () => (
  <>
    <AddProducts />
    <EditProducts />
  </>
);

export default AdminDashboard;
