

import React, { useState } from 'react';

const initialUsers = [
  {
    name: "Virat Kohli",
    city: "Chennai",
    description: "Cricketer",
    skills: ['Catching', 'Fast reflexes', 'Foot work', 'Timing and placement'],
    profile: "virat kohli.jpeg",
    online: true,
  },
];

function User({ name, city, description, skills, profile, online, onDelete }) {
  return (
    <div className="card-container">
      <button className="delete-btn" onClick={onDelete}>×</button>
      <span className={online ? 'pro online' : 'pro offline'}>
        {online ? 'ONLINE' : 'OFFLINE'}
      </span>
      <img src={profile} className="img" alt="user" />
      <h3>{name}</h3>
      <h3>{city}</h3>
      <p>{description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h4>Skills</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export const UserCard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '', city: '', description: '', profile: '', skills: '', online: false
  });

  const handleAddUser = () => {
    const skillsArray = newUser.skills.split(',').map(skill => skill.trim());
    setUsers([...users, { ...newUser, skills: skillsArray }]);
    setNewUser({ name: '', city: '', description: '', profile: '', skills: '', online: false });
    setShowModal(false);
  };

  return (
    <>
      <div className="user-list">
  {users.map((user, index) => (
    <User 
      key={index} 
      {...user} 
      onDelete={() => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
      }} 
    />
  ))}
</div>


      {/* + Button */}
      <div className="add-user-form">
        <button className="add-button" onClick={() => setShowModal(true)}>+</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New User</h3>
            <input placeholder="Name" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
            <input placeholder="City" value={newUser.city} onChange={e => setNewUser({ ...newUser, city: e.target.value })} />
            <input placeholder="Description" value={newUser.description} onChange={e => setNewUser({ ...newUser, description: e.target.value })} />
            <input placeholder="Skills (comma separated)" value={newUser.skills} onChange={e => setNewUser({ ...newUser, skills: e.target.value })} />
            <input placeholder="Profile image URL" value={newUser.profile} onChange={e => setNewUser({ ...newUser, profile: e.target.value })} />
            <label>
              Online:
              <input type="checkbox" checked={newUser.online} onChange={e => setNewUser({ ...newUser, online: e.target.checked })} />
            </label>
            <button onClick={handleAddUser}>Add</button>
          </div>
        </div>
      )}
    </>
  );
};
