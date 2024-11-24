import React, { useState } from 'react';
import roles from '../data/roles';  // Ensure this matches your data import

function RoleManager() {
  const [roleList, setRoleList] = useState(roles);

  return (
    <div>
      <h2 className="mb-3">Role Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleManager;
