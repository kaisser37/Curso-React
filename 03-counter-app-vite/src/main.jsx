import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './index.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* < FirstApp title='holas' subtitle={3}/> */}
        <CounterApp value={123} />
    </React.StrictMode>
);