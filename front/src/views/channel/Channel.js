import React from 'react';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail';
import Scrollbar from 'react-custom-scrollbars';

import './Channel.scss';

class Channel extends React.Component {
    render() {
        return (
            <div className="channel">
                <Scrollbar className="scrollbar">
                    <div className="header">
                        <div className="background"/>
                        <h1 className="title"><i className="fa fa-music"/> MUSIC</h1>
                        <ul className="categoryInfo">
                            <li>97,174,199 subscribers</li>
                            <li>255,525,456 Views</li>
                            <li>45,23,65 Channel No</li>
                            <li className="subscribe"><a href="#">Subscribe</a></li>
                        </ul>
                    </div>

                    <div className="videos">
                        {
                            Array.from(Array(19), (x, i) => i).map(() => {
                                return (
                                    <VideoThumbmail/>
                                )
                            })
                        }
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default Channel;