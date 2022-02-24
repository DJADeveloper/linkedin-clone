import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './Firebase';
import { login } from '../features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please enter full name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)

      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.name,
            profileUrl: userAuth.user.profilePic,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className='login'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/1384/1384171.png'
        alt='linkedinLogo'
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full name'
          className='form-control'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
          placeholder='Profile Picture'
          className='form-control'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
          className='form-control'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          className='form-control'
        />
        <button
          className='btn btn-primary container-fluid'
          onClick={loginToApp}>
          Sign In
        </button>
        <p
          className='d-flex justify-content-center mt-3
        '>
          Not a member?
          <span className='login__register ms-1' onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
