import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsPage from './transactions-page'; // or './pages/transactions-page (4)'
import UserSettingsPage from './user-settings-page'; // Changed from SettingsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/settings" element={<UserSettingsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;