import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Profile />
    <Posts />
  </React.StrictMode>
);

