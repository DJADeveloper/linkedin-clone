import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className='sidebar__recentItem d-flex align-items-center'>
      <span className='sidebar__hash me-1'># </span>
      <p className='d-flex align-items-center  mt-3'>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div>
        <div className='sidebar__top'>
          <img
            src='https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            alt=''
            className='sidebar__img'
          />
          <div className='sidebar__content d-flex flex-column align-items-center'>
            <Avatar className='sidebar__avatar' src={user.photoUrl} />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
          </div>
        </div>
        <div className='sidebar__stats justify-content-between '>
          <div className='sidebar__stat d-flex justify-content-between'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,530</p>
          </div>
          <div className='sidebar__stat d-flex justify-content-between'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,530</p>
          </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem('HelloWold')}
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('softwareenineering')}
          {recentItem('design')}
          {recentItem('developer')}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
