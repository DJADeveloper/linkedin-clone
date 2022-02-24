import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css';

const HeaderOption = ({ icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div
      className='header__option d-flex flex-column align-items-center  mx-2'
      onClick={onClick}>
      {icon && <div className='headerOption__icon '>{icon}</div>}
      {avatar && <Avatar className='headerOption__avatar' />}
      <h6 className='headerOption__title'>{title}</h6>
    </div>
  );
};

export default HeaderOption;
