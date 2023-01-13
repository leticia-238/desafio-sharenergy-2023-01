import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Private Route</h1>
      <Outlet />
    </>
  );
}

export default App;
