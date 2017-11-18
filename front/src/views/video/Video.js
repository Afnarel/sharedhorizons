import React from 'react';
import Youtube from 'react-youtube';
import Lorem from 'react-lorem-component';
import Scrollbar from 'react-custom-scrollbars';

import './Video.scss';

class Video extends React.Component {
    render() {
        return (
            <div className="view video">
                <Scrollbar>
                    <div className="toto">
                        <Youtube
                            videoId={this.props.match.params.videoId}
                            className="youtubePlayer"
                            opts={{
                                height: '620px',
                                width: '100%',
                                playerVars: { // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0
                                }
                            }}
                        />


                        <div className="commentaries">
                            <h1>Commentaires</h1>
                            {
                                Array.from(Array(3), (x, i) => i).map((i) => {
                                    return (
                                        <div className="commentary">
                                        <span className="author">
                                            <Lorem className="author-lorem"
                                                   seed={getRandomInt(0, 1000)}
                                                   count={1}
                                                   sentenceLowerBound={1}
                                                   sentenceUpperBound={2}
                                                   paragraphUpperBound={1}
                                                   paragraphLowerBound={1}/>
                                            <span className="date">
                                            2 days ago
                                        </span>
                                        </span>
                                            <span className="text">
                                            <Lorem seed={getRandomInt(0, 1000)}
                                                   count={1}
                                                   sentenceLowerBound={1}
                                                   sentenceUpperBound={20}
                                                   paragraphUpperBound={1}
                                                   paragraphLowerBound={1}/>
                                        </span>
                                        </div>
                                    )
                                })
                            }

                            <h2>Ajouter un commentaire</h2>
                            <textarea cols="30" rows="10" className="addCommentary" placeholder="commentaire..."/>
                            <div className="yoloButton">
                                <div className="validateButton">Valider</div>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Video;