import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import APIKit from '../spotify';
import TopMenu from '../TopMenu';
import Library from './Library';
import {IconContext} from 'react-icons'
import {AiFillPlayCircle} from 'react-icons/ai'
import './Home.css';
import './Playlist.css';


export default function Playlist() {
	const [playlists, setPlaylists] = useState(null);

	useEffect(() => {
		APIKit.get('me/playlists').then(function (response) {
			setPlaylists(response.data.items);
			console.log(response.data.items);
		});
	}, []);
	
	let navigate = useNavigate()
	const playPlaylist = (id) => {
		navigate('/library',{ state:{id:id}})
	}
	// const routeChange= () => {
	// 	let path = `/library`
	// 	navigate(path)
	// }
	return (
		<section class="music-home-container">
			<TopMenu />

			<div className="playlist-container">
				<h3 className="c-heading">My Playlist</h3>

				<div className="playlist-items">
					{playlists?.map(playlist => 
					<div className="playlist-card" key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
						<img src={playlist.images[0].url} alt="" />
						<div className="card-details">
							<h4>{playlist.name}</h4>
							<p>
								Total songs: <span className="s-num">{playlist.tracks.total}</span>
							</p>
							<p>
								By: <span className="s-artist">{playlist.owner.display_name}</span>
							</p>
						</div>
						<div className='play-fade'>
							<IconContext.Provider value={{size:'50px',color:'#660099'}}>
								<AiFillPlayCircle />
							</IconContext.Provider>
						</div>
					</div>
					)}
				</div>
			</div>
		</section>
	);
}
