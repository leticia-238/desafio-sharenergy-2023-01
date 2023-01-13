import { Outlet } from 'react-router-dom';

function CustomerManagement() {
  return (
    <>
      <h2>Customer Management</h2>
      <Outlet />
    </>
  );
}

export default CustomerManagement;
