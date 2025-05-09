import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function ClientManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    telephone: '',
    company_name: '',
    extra_info: ''
  });

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/users/`, newUser);
      setNewUser({ username: '', email: '', telephone: '', company_name: '', extra_info: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <main>
      <section className="add-user">
        <h2>Ajouter un client</h2>
        <form onSubmit={handleSubmit} className="b2s-form">
          <input
            type="text"
            name="username"
            placeholder="Nom complet"
            value={newUser.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="telephone"
            placeholder="Téléphone"
            value={newUser.telephone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="company_name"
            placeholder="Nom de la société"
            value={newUser.company_name}
            onChange={handleInputChange}
          />
          <textarea
            name="extra_info"
            placeholder="Infos supplémentaires"
            value={newUser.extra_info}
            onChange={handleInputChange}
            rows={3}
          />
          <button type="submit" className="b2s-btn">Ajouter le client</button>
        </form>
      </section>

      <section className="user-list">
        <h2>Liste des clients</h2>
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.username}</h3>
              <p><b>Email :</b> {user.email}</p>
              {user.telephone && <p><b>Téléphone :</b> {user.telephone}</p>}
              {user.company_name && <p><b>Société :</b> {user.company_name}</p>}
              {user.extra_info && <p className="extra-info">{user.extra_info}</p>}
              <button className="b2s-btn delete" onClick={() => handleDelete(user.id)}>Supprimer</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ClientManager; 