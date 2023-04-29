import React from 'react';
import './ProgressBar.css'

export default function ProgressBar({isPlaying }) {
  const proClass = isPlaying ? "box": "box";
	return( 
    <div className='box-container'>
      <div className={`${proClass}`}></div>
    </div>
  );
}
