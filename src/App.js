import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Library from './components/Library';
import Playlist from './components/Playlist';
import CreatePlaylist from './components/CreatePlaylist';
import Categories from './components/Categories';
import Favsongs from './components/Favsongs';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';
import Login from './auth/Login';
import AudioPlayer from './components/AudioPlayer';
import { setClientToken } from './spotify';

// Creating the spotify object

function App() {
	const [token, setToken] = useState(' ');
	
	useEffect(() => {
		const token = window.localStorage.getItem('token');
		const hash = window.location.hash;
		// window.location.hash = ""

		if (!token && hash) {
			const _token = hash.split('&')[0].split('=')[1];
			window.localStorage.setItem('token', _token);
			setToken(_token);
			setClientToken(_token);
			// window.localStorage.clear("token")
		} else {
			setToken(token);
			setClientToken(token);
			// window.localStorage.clear("token")
		}
	}, []);
	return !token ? (
		<Login />
	) : (
		<Router>
			<div className="App">
				<Sidebar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/library" element={<Library />} />
					<Route path="/playlist" element={<Playlist />} />
					<Route path="/create-playlist" element={<CreatePlaylist />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/favourite-songs" element={<Favsongs />} />
					<Route path="/user" element={<UserProfile />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
				
			</div>
		</Router>
	);
}

export default App;
