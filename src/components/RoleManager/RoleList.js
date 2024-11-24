import React, { useState, useEffect } from 'react';
import roles from '../../data/roles.json'; // Static data import, replace with API call if needed

function RoleList() {
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    setRoleList(roles); // Simulate fetching data
  }, []);

  return (
    <div>
      <ul>
        {roleList.map(role => (
          <li key={role.id}>{role.name} - Permissions: {role.permissions.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoleList;
