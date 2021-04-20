import {useState, useEffect} from "react";


const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

    function resetTimer() {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setIsActive(false);
    }

    if (seconds >= 60) {
        setSeconds( 0);
        setMinutes(minutes + 1)
    }
    if (minutes >= 60) {
        setMinutes (0);
        setHours(hours + 1);
    }

    useEffect(() => {
        let interval = 0
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    return (
        <div className='timer'>
            <div className="area">
                <div className="square"><p id='hour'>{(hours < 10) ? `0${hours}` : hours}</p></div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="square"><p id='min'>{(minutes < 10) ? `0${minutes}` : minutes}</p></div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="square"><p id='sec'>{(seconds < 10) ? `0${seconds}` : seconds}</p></div>
            </div>
            <div className="buttons">
                <button onClick={toggle}
                        className='start'>{isActive ? 'Pause' : 'Start'}</button>
                <button  onClick={resetTimer}
                         className='reset'>Reset</button>
            </div>

        </div>
    )
}

export default Timer;


