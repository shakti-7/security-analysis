import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import IssueList from './components/IssueList';
import AddIssue from './components/AddIssue';
 
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Dashboard />
      <div class = "container">
        <IssueList />
        <AddIssue />
      </div>
    </GlobalProvider>
  );
}

export default App;
