import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import config from './aws-exports';
import Amplify from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '../node_modules/@aws-amplify/ui-react/dist/styles.css'
import {Account}  from './Accounts';


Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Account>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </Account>
);