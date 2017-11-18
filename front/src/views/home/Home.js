import React from 'react';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail'
import Scrollbar from 'react-custom-scrollbars';
import className from 'classnames';

import './Home.scss';

const menus = [
    {
        name: 'Trending',
        icon: 'fa-bolt'
    },
    {
        name: 'Education',
        icon: 'fa-book'
    },
    {
        name: 'Culture',
        icon: 'fa-video-camera'
    },
    {
        name: 'Société',
        icon: 'fa-user'
    },
    {
        name: 'Compétences',
        icon: 'fa-superscript'
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
                                            Array.from(Array(5), (x, i) => i).map(i => {
                                                return (
                                                    <VideoThumbmail/>
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