import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Library from './components/Library';
import Playlist from './components/Playlist';
import CreatePlaylist from './components/CreatePlaylist';
import Categories from './components/Categories';
import Favsongs from './components/Favsongs';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';

function App() {
	return (
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
