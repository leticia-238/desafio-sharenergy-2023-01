import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import App from '../App';
import { AuthContext } from '../contexts/AuthContext';

function Private() {
  const auth = useContext(AuthContext);
  return (
    auth.token ? (
      <App />
    ) : <Navigate to="/login" />
  );
}

export default Private;
