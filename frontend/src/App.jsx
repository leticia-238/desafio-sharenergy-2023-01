import { Routes, Route } from 'react-router-dom';
import Private from './layouts/Private';
import Login from './pages/Login';
import HttpStatusCat from './pages/HttpStatusCat';
import UserList from './pages/UserList';
import CustomerManagement from './layouts/CustomerManagement';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Private /> }>
        <Route index element={ <UserList /> } />
        <Route path="http-status-cat" element={ <HttpStatusCat /> } />
        <Route path="customers" element={ <CustomerManagement /> }>
          <Route index element={ <h2>Customer List</h2> } />
          <Route path="edit" element={ <h2>Customer Edit</h2> } />
        </Route>
      </Route>
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
