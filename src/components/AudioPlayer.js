import React from 'react';
import './AudioPlayer.css';
import ProgressBar from '../ProgressBar';
import Controls from '../Controls';
// import Library from './Library';

export default function AudioPlayer({currentTrack}) {
    return(
        <div className='controls'>
            <ProgressBar/>
            <Controls 
            // isPlaying={isPlaying}
            // setIsPlaying={setIsPlaying}
            // handleNext={handleNext}
            // handlePrev={handlePrev}
            // total={total}
            />
        </div>
    )
}
