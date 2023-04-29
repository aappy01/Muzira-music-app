import axios from "axios";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientID = 'bc727f5f6294400b9d5c19e35e3bf1a7';
const RedirectUri = 'http://localhost:3000';
const scopes = [
	'user-read-playback-state',
	'user-read-currently-playing',
	'user-follow-read',
	'user-read-recently-played',
	'user-top-read',
	'playlist-read-private',
	'user-library-read',
	'user-follow-read',
];
// export const getTokenFromUrl = () => {
// 	return window.location.hash
// 		.substring(1)
// 		.split('&')
// 		.reduce((initial, item) => {
// 			var parts = item.split('=');
// 			initial[parts[0]] = decodeURIComponent(parts[1]);

// 			return initial;
// 		}, {});
// };
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${RedirectUri}&scope=${scopes.join(
	'&20'
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
	baseURL:"https://api.spotify.com/v1/"
})

export const setClientToken = (token) => {
	apiClient.interceptors.request.use(async function(config){
		config.headers.Authorization ="Bearer " + token;
		return config;
	})
}

export default apiClient;