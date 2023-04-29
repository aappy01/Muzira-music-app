import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopMenu from '../TopMenu';
import SongQueue from '../SongQueue';
import AudioPlayer from './AudioPlayer';
import './Library.css';
import apiClient from '../spotify';

export default function Library() {
	const location = useLocation();
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		if (location.state) {
			apiClient
				.get('playlists/' + location.state?.id + '/tracks')
				.then((res) => {
					setTracks(res.data.items);
					setCurrentTrack(res.data.items[0].track);
				});
		}
	}, [location.state]);

	useEffect(() => {
		setCurrentTrack(tracks[currentIndex]?.track);
	}, [currentIndex, tracks]);

	return (
		//   <!-- =========================library section=========================== -->
		<main>
			<section className="library">
				{/* <!-- =========================PAGE HEADING=========================== --> */}
				<TopMenu />
				{/* <!-- =========================CENTER BOX=========================== --> */}
				<div className="rectangle-heading">
					<span>Songs</span>
					<span>Album</span>
					<span>Now Playing</span>
					<span>Favourite Songs</span>
				</div>
				<div className="rectangle">
					<SongQueue tracks={tracks} setCurrentIndex={setCurrentIndex} />
				</div>
				
			</section>
		</main>
	);
}
