import TopMenu from '../TopMenu';
import './Home.css'
import ayraStar from '../assets/img/music-covers/ayrastar.png';
import backinUni from '../assets/img/music-covers/backinUni.png';
import bigMoney from '../assets/img/music-covers/bigMoney.png';
import cough from '../assets/img/music-covers/cough.png';
import fave from '../assets/img/music-covers/fave.png';
import hypertension from '../assets/img/music-covers/hypertension.png';
import johnny from '../assets/img/music-covers/johnydrile.png';
import philo from '../assets/img/music-covers/philo.png';
import showdemcamp from '../assets/img/music-covers/showdemcamp.png';
import unwanted from '../assets/img/music-covers/unwanted.png';
import youngjon from '../assets/img/music-covers/youngjon.png';

function Home(){
    return(
        <section class="music-home-container">
            {/* <!-- === Search Bar, Notification & User  ===--> */}
            <TopMenu />
            
            {/* {<!-- === Categories  ===-->} */}
            <div class="categories">
                <div class="categories-container">
                    {/* <!-- === Top picks Categories  ===--> */}
                    <div class="song-categories top-picks-container">
                        <h3 class="c-heading">Top Picks</h3>
                        
                        <div class="songs tpick-songs">
                            <div class="artist-container">
                                <img src={fave} alt="" class="cover-img" />
                                <span class="song-name">Scatta Scatta</span>
                                <span class="singer">Fave</span>
                            </div>
                            <div class="artist-container">
                                <img src={cough} alt="" class="cover-img" />
                                <span class="song-name">Cough (Odo)</span>
                                <span class="singer">Empire & Kizz Daniel</span>
                            </div>
                            <div class="artist-container">
                                <img src={youngjon} alt="" class="cover-img" />
                                <span class="song-name">Sokoto</span>
                                <span class="singer">Young Jon</span>
                            </div>
                            <div class="artist-container">
                                <img src={showdemcamp} alt="" class="cover-img" />
                                <span class="song-name">Mine Alone</span>
                                <span class="singer">Show Dem Camp & Oxlade</span>
                            </div>
                        </div>
                    </div>
                    <div class="song-categories recently-played-container">
                        <h3 class="c-heading">Recently played</h3>
                        <div class="songs rplayed-songs">
                            <div class="artist-container">
                                <img src={johnny} alt="" class="cover-img" />
                                <span class="song-name">How are you (My friend)</span>
                                <span class="singer">Johny Drille</span>
                            </div>
                            <div class="artist-container">
                                <img src={philo} alt="" class="cover-img" />
                                <span class="song-name">Philo</span>
                                <span class="singer">Bella Shmurda & Omah Lay</span>
                            </div>
                            <div class="artist-container">
                                <img src={backinUni} alt="" srcset="" class="cover-img" />
                                <span class="song-name">Back in Uni</span>
                                <span class="singer">Blaqbonez & J4E5</span>
                            </div>
                            <div class="artist-container">
                                <img src={bigMoney} alt="" class="cover-img" />
                                <span class="song-name">Big Money</span>
                                <span class="singer">Bad Boy Timz</span>
                            </div>
                        </div>
                    </div>
                    <div class="song-categories new-release-container">
                        <h3 class="c-heading">New Releases</h3>
                        <div class="songs nrelease-songs">
                            <div class="artist-container">
                                <img src={hypertension} alt="" class="cover-img" />
                                <span class="song-name">Hypertension</span>
                                <span class="singer">Bella Shmurda</span>
                            </div>
                            <div class="artist-container">
                                <img src={cough} alt="" class="cover-img" />
                                <span class="song-name">Love Is Not Enough. Vol 2 - EP</span>
                                <span class="singer">Young John</span>
                            </div>
                            <div class="artist-container">
                                <img src={unwanted} alt="" class="cover-img" />
                                <span class="song-name">Unwanted</span>
                                <span class="singer">Mannywellz</span>
                            </div>
                            <div class="artist-container">
                                <img src={ayraStar} alt="" class="cover-img" />
                                <span class="song-name">19 & Dangerous (Deluxe)</span>
                                <span class="singer">Ayra starr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;