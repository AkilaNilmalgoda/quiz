import React, {useState, useEffect} from 'react'

const StopWatch = (props) => {
    const {setSeconds, setMinutes} = props

    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    setMinutes(minute)
    setSeconds(second)

    useEffect(() => {
        let intervalId;
    
        if (isActive) {
            intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
    
            let computedSecond =
                String(secondCounter).length === 1
                ? `0${secondCounter}`
                : secondCounter;
            let computedMinute =
                String(minuteCounter).length === 1
                ? `0${minuteCounter}`
                : minuteCounter;
    
            setSecond(computedSecond);
            setMinute(computedMinute);
    
            setCounter((counter) => counter + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter]);
    
    function stopTimer() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
    }

    return (
        <div>
            {/* <div class="time">
                <span class="minute">{minute}</span>
                <span>:</span>
                <span class="second">{second}</span>
            </div> */}
            <div >
                <button className="btn bg-3 text-light mr-1" onClick={() => setIsActive(!isActive)} >
                {isActive ? "Pause" : "Start"}
                </button>
                <button className="btn bg-3 text-light" onClick={stopTimer} >
                    Reset
                </button>
      </div>
        </div>
    )
}

export default StopWatch