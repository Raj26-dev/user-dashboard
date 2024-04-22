import React, { useState } from 'react';
import { useInfiniteUsers } from '../hooks/useInfiniteUsers';

const UserListWithSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data, fetchNextPage, hasNextPage, isFetchingNextPage,
  } = useInfiniteUsers(searchQuery);

  return (
    <>
      <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <ul>
        {data?.pages.map(page => (
          page.results.map(user => (
            <li key={user.email}>
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
              <p>{user.name.first} {user.name.last}</p>
              <p>{user.email}</p>
            </li>
          ))
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </>
  );
};

export default UserListWithSearch;