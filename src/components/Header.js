import {
  BusinessCenter,
  Chat,
  Home,
  NotificationAdd,
  Notifications,
  Search,
  SupervisorAccount,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import './Header.css';
import HeaderOption from './HeaderOption';
import { logout } from '../features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header d-flex px-5'>
      <div className='header__left align-items-center'>
        <img
          src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645723753~hmac=3340fcfbe71b46ebdd528268d780dbb7'
          alt='linkedinLogo'
        />
        <div className='header__search'>
          {/* search icon */}
          <Search />
          <input type='text' className='header__input' placeholder='Search' />
        </div>
      </div>
      <div className='header__right d-flex justify-content-between'>
        <HeaderOption title='Home' icon={<Home />} />
        <HeaderOption title='My Network' icon={<SupervisorAccount />} />
        <HeaderOption title='Jobs' icon={<BusinessCenter />} />
        <HeaderOption title='Messaging' icon={<Chat />} />
        <HeaderOption title='Notifications' icon={<Notifications />} />
        {/* <HeaderOption
          title='me'
          avatar='assets/Headshot.png'
          onClick={logOutOfApp}
        /> */}
      </div>
    </div>
  );
}

export default Header;
