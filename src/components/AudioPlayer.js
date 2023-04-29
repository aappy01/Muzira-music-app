import React,{useState,useEffect,useRef} from 'react';
import './AudioPlayer.css';
import ProgressBar from '../ProgressBar';
import Controls from '../Controls';


export default function AudioPlayer({currentTrack,currentIndex,total,setCurrentIndex}) {
    const [isPlaying,setIsPlaying] = useState(false)
	const [trackProgress,setTrackProgress] = useState(0)
    
	var audioSource = total[currentIndex]?.track.preview_url
    const audioRef = useRef(new Audio(total[0]?.track.preview_url))
    const intervalRef = useRef();
    const isReady = useRef(false)
    const {duration} = audioRef.current
    const currentPercentage = duration? (trackProgress/duration)*100: 0;
    const startTimer = ()=>{
        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            if(audioRef.current.ended){
                handleNext()
            }else{
                setTrackProgress(audioRef.current.currentTime)
            }
        }, (1000));
    };

    useEffect(()=>{
        if(isPlaying && audioRef.current){
            audioRef.current = new Audio(audioSource)
            audioRef.current.play()
            startTimer()
        }else{
            clearInterval(intervalRef.current)
            audioRef.current.pause()
        }
    },[isPlaying])

    useEffect(() => {
        audioRef.current.pause()
        audioRef.current = new Audio(audioSource)
        setTrackProgress(audioRef.current.currentTime);
        if(isReady.current){
            audioRef.current.play()
            setIsPlaying(true)
            startTimer()
        }else{
            isReady.current = true
        }
    },[currentIndex])

    useEffect(() => {
        return() =>{
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    },[])

    const handleNext = () => {
        if(currentIndex < total.length-1){
            setCurrentIndex(currentIndex + 1)
        }else{
            setCurrentIndex(0)
        }
    }

    const handlePrev = () => {
        if(currentIndex - 1 < 0){
            setCurrentIndex(total.length-1)
        }else{
            setCurrentIndex(currentIndex-1)
        }
    }

    const addZero = (n) => {
        return n > 9 ? '' + n : '0' + n;

    };
    
    return(
        <div className='controls'>
            <div className='duration-container'>
                <span className='duration'>0:{addZero(Math.round(trackProgress))}</span>
                    <ProgressBar
                    percentage={currentPercentage}
                    isPlaying={isPlaying}/>
                <span className='duration'>0:00</span>
            </div>
            <Controls 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
            />
        </div>
        
    )
}
