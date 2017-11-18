import React from 'react';

import './VideoThumbmail.scss';

class VideoThumbmail extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="videoThumbmail">
                <div className="videoItem">
                    <div className="thumb">
                        <small className="time">{this.props.length}</small>
                        <a href={"/video/" + this.props.url.split('watch?v=')[1]}>
                            <img src={this.props.thumbnail}/>
                        </a>
                    </div>
                    <div className="videoInfo">
                        <a href={"/video/" + this.props.url.split('watch?v=')[1]}
                           className="title">{this.props.title}</a>
                        <a className="channelName" href={"/channel/" + this.props.author}>Rabie Elkheir</a>
                        <span className="totalViews"><i className="fa fa-eye"/>{this.props.nbViews} </span>
                        <span className="date"><i className="fa fa-clock-o"/>{this.props.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default VideoThumbmail;