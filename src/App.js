import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserManager from './components/UserManager';
import RoleManager from './components/RoleManager';

function App() {
  return (
    <div className="container mt-5">
      <h1>RBAC Admin Dashboard</h1>
      <UserManager />
      <RoleManager />
    </div>
  );
}

export default App;
