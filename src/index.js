import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/index.css';
import './components/Profile/profile.module.css';
import './components/Statistics/statistics.module.css';
import './components/FriendList/friendListItem.module.css';
import './components/TransactionHistory/transactionHistory.module.css';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
    />
  </React.StrictMode>
);
