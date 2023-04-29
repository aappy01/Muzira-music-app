import './components/Home.css';
import searchIcon from './assets/img/search-icon.svg';
import alertIcon from './assets/img/notification-icon.svg';
import female from './assets/img/female-img.png';
import React,{useState,useEffect} from 'react'
import apiClient from './spotify';


export default function TopMenu() {
	const [searchInput, setSearchInput] = useState("");
	const [image,setImage] = useState()
	useEffect(() => {
		apiClient.get('me').then(response =>{
			setImage(response.data.images[0].url)
		})
	},[]);
	return (
		<div class="topbar-menu-container">
			<div class="search-box-content">
				<img
					src={searchIcon}
					alt=""
					style={{ height: '18px', color: '#7A7A7A' }}
				/>
				<input
					type="text"
					placeholder="Artist, Song, Lyrics and more"
					// onKeyPress={event => {
					// 	if(event.key == "Enter") {
					// 		console.log("User pressed Search")

					// 	}
					// }}
					// onChange ={event => setSearchInput(event.target.value)}
				/>
				{/* <button  onClick={event => { console.log("Clicked here")}}>
					Search
				</button> */}
			</div>

			<div class="alert-and-profile-content">
				<div class="alert-container">
					<img src={alertIcon} alt="" />
				</div>

				<div class="profile-container">
					<div class="image-box">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
