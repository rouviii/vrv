import React, { useState, useEffect, useRef } from 'react';

const Homepage = () => {

    const videoRef = useRef();


    return(
        <div className="mountain-container">

            <video 
            className="mountain-video" 
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            >
                <source src="images/matterhorn.mp4" type="video/mp4"/>
            </video>

            <div className="grey-overlay"></div>

            <img src="images/logo_black.png" />

            <p>We are VRV Group</p>

        </div>
    )
};
export default Homepage;