import React from 'react';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail';
import Constants from '../../services/ConstantsService';
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
                            Object.keys(Constants.VIDEOS).reduce((prev, next) => {
                                return prev.concat(Constants.VIDEOS[next]);
                            }, []).filter(v => v.author === this.props.match.params.name).map((video) => {
                                return (
                                    <VideoThumbmail title={video.title}
                                                    author={video.author}
                                                    nbViews={video['nb_views']}
                                                    category={video.category}
                                                    thumbnail={video.thumbnail}
                                                    url={video.url}
                                                    length={video.length}
                                                    date={video['published_date']}/>
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