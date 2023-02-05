import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/index.css';
import './styles/profile.module.css';
import './styles/statistics.module.css';
import './styles/friendListItem.module.css';
import './styles/transactionHistory.module.css';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
    />
  </React.StrictMode>
);
