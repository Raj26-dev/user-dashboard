import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListWithSearch from './components/UserListWithSearch';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListWithSearch />} />
        <Route path="/user/:email" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;