import React from 'react';
import VideoThumbmailHorizontal from '../../components/videothumbmailhorizontal/VideoThumbmailHorizontal';
import Scrollbar from 'react-custom-scrollbars';

import './History.scss';

class History extends React.Component {
    render() {
        return (
            <div className="history">
                <Scrollbar>
                    {
                        Array.from(Array(19), (x, i) => i).map(() => {
                            return (
                                <VideoThumbmailHorizontal/>
                            )
                        })
                    }
                </Scrollbar>
            </div>
        );
    }
}

export default History;