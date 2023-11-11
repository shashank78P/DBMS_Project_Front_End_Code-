import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from "./component/admin_folder/admin";
import Login from "./component/login";
import reportWebVitals from './reportWebVitals';
import { Link,BrowserRouter,Route,Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <App />
     </BrowserRouter>
);

