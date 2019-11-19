import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustumLayout from './container/Layout';
import BaseRouter from './routers';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <CustumLayout>
        <BaseRouter/>
      </CustumLayout>
    </Router>
    </div>
  );
}

export default App;
