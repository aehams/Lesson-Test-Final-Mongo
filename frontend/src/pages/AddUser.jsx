import React, { useState } from 'react';
import { api } from '../api';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', { name, email });
      setSuccess('User created successfully');
      setError('');
      setName('');
      setEmail('');
    } catch (err) {
      setError('error Add user ');
      setSuccess('');
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label> Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
