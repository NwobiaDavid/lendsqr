import React, { useEffect, useState } from 'react';
import { saveUsersToLocal, getUsersFromLocal, User } from '../../services/indexedDB';
import {getUsers} from '../../services/mockAPI'

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localUsers = await getUsersFromLocal();
        if (localUsers.length > 0) {
          setUsers(localUsers);
        } else {
          const apiUsers = await getUsers();
          setUsers(apiUsers);
          await saveUsersToLocal(apiUsers);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phoneNumber}</p>
              <p>Created At: {user.createdAt}</p>
              <p>Organization: {user.orgName}</p>
              <p>Username: {user.userName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
