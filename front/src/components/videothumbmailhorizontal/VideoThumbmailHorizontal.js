import React from 'react';

import './VideoThumbmailHorizontal.scss';

class VideoThumbmailHorizontal extends React.Component {
    render() {
        return (
            <div className="videoThumbmailHorizontal ">
                <div className="videoItem">
                    <div className="thumb">
                        <small className="time">{this.props.length}</small>
                        <a href={"/video/" + this.props.url.split('watch?v=')[1]}>
                            <img src={this.props.thumbnail}/>
                        </a>
                    </div>
                    <div className="videoInfo">
                        <a href={"/video/" + this.props.url.split('watch?v=')[1]}
                           className="title">{this.props.title} </a>
                        <p className="description">{this.props.description}</p>
                        <a className="channelName" href={"/channel/" + this.props.author}>{this.props.author}</a>
                        <span className="totalViews"><i className="fa fa-eye"/>{this.props.nbViews} </span>
                        <span className="date"><i className="fa fa-clock-o"/>{this.props.date} </span>
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