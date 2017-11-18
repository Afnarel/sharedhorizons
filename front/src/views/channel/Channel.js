import React from 'react';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail';
import Scrollbar from 'react-custom-scrollbars';

import './Channel.scss';

class Channel extends React.Component {
    render() {
        console.log(this.props.match.params.name)
        return (
            <div className="channel">
                <Scrollbar className="scrollbar">
                    <div className="header">
                        <div className="background"/>
                        <h1 className="title">{this.props.match.params.name}</h1>
                        <ul className="categoryInfo">
                            <li>97,174,199 abonnés</li>
                            <li>255,525,456 vues</li>
                            <li className="subscribe"><a href="#">S'abonner</a></li>
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