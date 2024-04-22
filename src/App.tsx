import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListWithSearch from './components/UserListWithSearch';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListWithSearch />} />
        <Route path="/user/:email" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;