import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './ch_03/Library';
import Clock from './ch_04/Clock';
import CommentList from './ch_05/CommentList';
import NotificationList from './ch_06/NotificationList';
import Accommodate from './ch_07/Accommodate';
import ConfirmButton from './ch_08/ConfirmButton';
import LandingPage from './ch_09/LandingPage';
import AttendanceBook from './ch_10/AttendanceBook';
import SingUp from './ch_11/SignUp';
import Calculator from './ch_12/Calculator';
import ProfileCard from './ch_13/ProfileCard';
import DarkOrLight from './ch_14/DarkOrLight';
import Blocks from './ch_15/Blocks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
