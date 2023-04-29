import './Sidebar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo-icon.png';
import catIcon from '../assets/img/b-categories-icon.svg';
import homeIcon from '../assets/img/home-icon.svg';
import heartIcon from '../assets/img/fav-icon.svg';
import playlistIcon from '../assets/img/playlist-icon.svg';
import libraryIcon from '../assets/img/library-icon.svg';
import userIcon from '../assets/img/user-icon.svg';
import createPlaylistIcon from '../assets/img/create-playlist-icon.svg';
import settingsIcon from '../assets/img/settings-icon.svg';

function Sidebar() {
	return (
		<aside className="sidebar-container">
			<div className="hamburger-menu"></div>
			<div className="logo-container">
				<NavLink to="/">
					<img src={logo} alt="" />
				</NavLink>
			</div>

			<ul className="nav-menu">
				<li class="nav-item">
					<NavLink to="/">
						<img src={homeIcon} alt="" />
						<span>Home</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/library">
						<img src={libraryIcon} alt="" />
						<span>Library</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/playlist">
						<img src={playlistIcon} alt="" />
						<span>Playlist</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/create-playlist">
						<img src={createPlaylistIcon} alt="" />
						<span>Create Playlist</span>
					</NavLink>
				</li>
			</ul>

			<ul className="nav-menu">
				<li class="nav-item">
					<NavLink to="/categories">
						<img src={catIcon} alt="" />
						<span>Browse categories</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/favourite-songs">
						<img src={heartIcon} alt="" />
						<span>Favourite songs</span>
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/user">
						<img src={userIcon} alt="" />
						<span>User profile</span>
					</NavLink>
				</li>
			</ul>
			<ul className="nav-menu">
				<li className="nav-item">
					<NavLink to="/settings">
						<img src={settingsIcon} alt="" />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
