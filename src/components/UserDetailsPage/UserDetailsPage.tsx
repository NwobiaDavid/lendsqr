import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsersFromLocal, User } from '../../services/indexedDB';


const UserDetailsPage: React.FC = () => {
  const params = useParams<Record<string, string>>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch the user's details based on the ID from the API or Local Storage
    const fetchUserDetails = async () => {
      try {
        const users = await getUsersFromLocal(); // Replace with appropriate data retrieval method
        const userDetails = users.find((user) => user.id === params.id);
        setUser(userDetails || null);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [params.id]);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>
      <p>one=== {user.orgName}</p>
      {/* Render other user details */}
    </div>
  );
};

export default UserDetailsPage;