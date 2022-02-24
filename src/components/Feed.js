import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './Firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input mt-1'>
          <Create />
          <form onSubmit={sendPost}>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions d-flex justify-content-evenly'>
          <InputOption Icon={Image} title='Photo' color='#70B5F9' />
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write Article'
            color='#7fc15e'
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            id={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
