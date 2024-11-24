import React, { useState } from 'react';

function AddUser({ addUserCallback }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');
  const [roles, setRoles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserCallback({ username, email, status, roles });
    setUsername('');
    setEmail('');
    setStatus('Active');
    setRoles([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      {/* Roles selection logic can be added similarly */}
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
}

export default AddUser;
