import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widget.css';

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecord />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets '>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('Papa React is back', 'Tops news - 999 readers')}
      {newsArticle('CoronaVirus', 'Tops news - 999 readers')}
      {newsArticle('Tesla', 'Tops news - 999 readers')}
      {newsArticle('Tesla', 'Tops news - 999 readers')}
      {newsArticle('Tesla', 'Tops news - 999 readers')}
    </div>
  );
};

export default Widget;
