import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserDetail } from '../services/api';
import styled from 'styled-components';

const StyledUserDetail = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const UserDetail: React.FC = () => {
  const { email } = useParams();
  const { data: user, isLoading, error } = useQuery(['userDetail', email], () => fetchUserDetail(email!));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred.</div>;

  return user ? (
    <StyledUserDetail>
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
    </StyledUserDetail>
  ) : null;
};

export default UserDetail;