import React from 'react';
import "./Controls.css";
import { IconContext } from 'react-icons';
import { IoPlaySkipBack, IoPlaySkipForward,IoPlay } from 'react-icons/io5'

export default function Controls({
		isPlaying, 
		setIsPlaying, 
		handleNext, 
		handlePrev
}) {
	// <Controls 
	// 	isPlaying={isPlaying}
	// 	setIsPlaying={setIsPlaying}
	// 	handleNext={handleNext}
	// 	handlePrev={handlePrev}
	// 	// total={total}
	// 	/>
	return <IconContext.Provider value={{size:"35px", color:""}}>
		<div className="control-wrapper">
			<div className="action-btn" onClick={handlePrev}>
				<IoPlaySkipBack/>
			</div>

			<div className="play-pause-btn" 
			onClick={() => setIsPlaying(!isPlaying)}>
				<IoPlay/>
			</div>

			<div className="action-btn" onClick={handleNext}>
				<IoPlaySkipForward/>
			</div>
		</div>


	</IconContext.Provider>

		
	
}
