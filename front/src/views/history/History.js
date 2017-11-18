import React from 'react';
import VideoThumbmailHorizontal from '../../components/videothumbmailhorizontal/VideoThumbmailHorizontal';
import Constants from '../../services/ConstantsService';
import Scrollbar from 'react-custom-scrollbars';

import './History.scss';

class History extends React.Component {
    render() {
        return (
            <div className="history">
                <Scrollbar>
                    {
                        Constants.VIDEOS.trending.map(video => {
                            return (
                                <VideoThumbmailHorizontal title={video.title}
                                                          author={video.author}
                                                          nbViews={video['nb_views']}
                                                          category={video.category}
                                                          thumbnail={video.thumbnail}
                                                          description={video.description}
                                                          url={video.url}
                                                          length={video.length}
                                                          date={video['published_date']}/>
                            )
                        })

                    }
                </Scrollbar>
            </div>
        );
    }
}

export default History;