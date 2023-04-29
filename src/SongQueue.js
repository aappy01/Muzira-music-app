import React from 'react';
import './SongQueue.css';

export default function SongQueue({tracks,setCurrentIndex}) {

    console.log(tracks)
	return( 
    <div className="q-container">
        <div className='queue-list'>
            {tracks?.map((track) => (
                <div className='song-info'>
                    <div className='artist-info'>
                        <img src={track?.track?.album?.images[2]?.url} alt='' />
                        <div className="song-data">
                            <span className='song-title'>{track?.track?.name}</span>
                            <span className='singers'>{track?.track?.artists[0].name}</span>
                        </div>
                    </div>
                    <p className='artist singers'>{track?.track?.artists[0].name}</p>
                    <p className='time'>{track?.track?.duration_ms}</p>
                </div>
            ))}
        </div>
    </div>
    );
}
