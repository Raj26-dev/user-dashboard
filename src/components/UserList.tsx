import React from 'react';
import { useUsers } from '../hooks/useUsers';

const UserList: React.FC = () => {
  const { data, error, isLoading } = useUsers(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred!</div>;

  return (
    <ul>
      {data?.results.map(user => (
        <li key={user.email}>
          <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <p>{user.name.first} {user.name.last}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;