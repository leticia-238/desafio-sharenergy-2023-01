import { Outlet, Navigate } from 'react-router-dom';

function Private() {
  const auth = { token: true };
  return (
    auth.token ? (
      <>
        <h1>Private Route</h1>
        <Outlet />
      </>
    ) : <Navigate to="/login" />
  );
}

export default Private;
