import React, { useState, useEffect } from 'react';
import users from '../../data/users.json'; // Static data import, replace with API call if needed

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users); // Simulate fetching data
  }, []);

  return (
    <div>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
