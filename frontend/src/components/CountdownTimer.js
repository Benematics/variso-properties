import React from 'react';
import { useEffect, useState } from "react/cjs/react.development";

function CountdownTimer(){


   const [expiryTime, setExpiryTime] = useState("1 May 2022 15:30:25");
   const [countdownTime, setCountdownTime]= useState(
       {
           countdownDays:'',
           countdownHours:'',
           countdownlMinutes:'',
           countdownSeconds:''
       }
   );

    const countdownTimer=()=>{
    
        const timeInterval= setInterval(() => {

          const countdownDateTime = new Date(expiryTime).getTime(); 
          const currentTime = new Date().getTime();
          const remainingDayTime = countdownDateTime - currentTime;
          const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
          const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
          const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
     
          const runningCountdownTime={
             countdownDays: totalDays,
             countdownHours: totalHours,
             countdownMinutes: totalMinutes,
             countdownSeconds: totalSeconds
          }
       
          setCountdownTime(runningCountdownTime);
     
          if (remainingDayTime < 0) {
             clearInterval(timeInterval);
             setExpiryTime(false);
            }
     
         }, 1000);
    }
     
    useEffect(() => {
        countdownTimer();
    });
   
    return(
           <section className="stats py-lg-5 py-4" style={{backgroundColor: "#000", color:"#fff"}}>
              <h3 className="text-center">Countdown To Our Properties Launching</h3>
                <div className="container">
                    <div className="row text-center">
                    {expiryTime!==false?
                        <>
                            <div className="col">
                                <div className="counter">
                                    <h3 className="timer count-title count-number">{countdownTime.countdownDays}</h3>
                                    <p className="count-text" style={{color:"#fff"}}>DAYS</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">
                                    <h3 className="timer count-title count-number">{countdownTime.countdownHours}</h3>
                                    <p className="count-text" style={{color:"#fff"}}>HOURS</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">
                                    <h3 className="timer count-title count-number">{countdownTime.countdownMinutes} </h3>
                                    <p className="count-text" style={{color:"#fff"}}>MINUTES</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter">
                                    <h3 className="timer count-title count-number">{countdownTime.countdownSeconds}</h3>
                                    <p className="count-text" style={{color:"#fff"}}>SECONDS</p>
                                </div>
                            </div>
                        </>
                        :<p>Deal has been Expired</p>}
                    </div>

                </div>
            </section>
    )

}
export default CountdownTimer;