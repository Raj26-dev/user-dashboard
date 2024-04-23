import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInfiniteUsers } from '../hooks/useInfiniteUsers';
import '../styles/UserListWithSearch.css'; // Importing the CSS for styling

const UserListWithSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data, fetchNextPage, hasNextPage, isFetchingNextPage,
  } = useInfiniteUsers(searchQuery);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search users..."
          className="search-input"
        />
        <i className="fa fa-search search-icon"></i>
      </div>
      <ul className="user-list">
        {data?.pages.map((page, index) => (
          page.results.map(user => (
            <li key={`${user.email}-${index}`} className="user-item">
               <Link to={`/user/${user.email}`}>
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="user-image" />
              <div className="user-info">
                <p className="user-name">{user.name.first} {user.name.last}</p>
                <p className="user-email">{user.email}</p>
              </div>
              </Link>
            </li>
          ))
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="load-more-btn"
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </>
  );
};

export default UserListWithSearch;