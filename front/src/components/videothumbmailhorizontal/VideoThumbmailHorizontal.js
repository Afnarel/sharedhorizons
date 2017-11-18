import React from 'react';

import './VideoThumbmailHorizontal.scss';

class VideoThumbmailHorizontal extends React.Component {
    render() {
        return (
            <div className="videoThumbmailHorizontal ">
                <div className="videoItem">
                    <div className="thumb">
                        <small className="time">10:53</small>
                        <a href="/video/Q5l2ChAqRDg">
                            <img src={require('../../images/random' + getRandomInt(1, 12) + '.jpeg')}/>
                        </a>
                    </div>
                    <div className="videoInfo">
                        <a href="/video/Q5l2ChAqRDg" className="title">Lorem Ipsum is simply dummy text of the printing and </a>
                        <a className="channelName" href="/channel/Rabie Elkheir">Rabie Elkheir</a>
                        <span className="totalViews"><i className="fa fa-eye"/>2.8M views </span>
                        <span className="date"><i className="fa fa-clock-o"/>5 months ago </span>
                    </div>
                </div>
            </div>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default VideoThumbmailHorizontal;