import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbsUpDown,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import InputOption from './InputOption';
import './Post.css';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__button'>
        <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
        <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlined} title='Share' color='gray' />
        <InputOption Icon={SendOutlined} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Post;
