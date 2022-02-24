import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import { auth } from './components/Firebase';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import { selectUser } from './features/userSlice';
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <div className='App d-flex   '>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='d-flex px-5 mt-4  '>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
