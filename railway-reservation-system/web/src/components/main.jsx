import React from "react";
import video from '../images/video.mp4';

const Main = () => {
    return(
    <div className='main'>
        <video src={video} autoPlay loop muted/>
    </div>
    )
}
export default Main