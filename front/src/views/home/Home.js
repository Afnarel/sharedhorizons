import React from 'react';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail'
import Constants from '../../services/ConstantsService';
import Scrollbar from 'react-custom-scrollbars';
import className from 'classnames';

import './Home.scss';

const menus = [
    {
        name: 'Trending',
        icon: 'fa-bolt',
        field: 'trending'
    },
    {
        name: 'Education',
        icon: 'fa-book',
        field: 'education'
    },
    {
        name: 'Culture',
        icon: 'fa-video-camera',
        field: 'culture'
    },
    {
        name: 'Société',
        icon: 'fa-user',
        field: 'society'
    },
    {
        name: 'Compétences',
        icon: 'fa-superscript',
        field: 'competences'
    }
];

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Scrollbar className="scrollbar">
                    {
                        menus.map(menu => {
                            return (
                                <div>
                                    <div className="categoryHeader">
                                        <i className={className("fa", menu.icon)}/>{menu.name.toUpperCase()}
                                    </div>
                                    <div className="videos">
                                        {
                                            Constants.VIDEOS[menu.field].map(video => {
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
                                </div>
                            )
                        })
                    }
                </Scrollbar>
            </div>
        );
    }
}

export default Home;