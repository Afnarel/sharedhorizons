import React from 'react';
import className from 'classnames';
import VideoThumbmail from '../../components/videothumbmail/VideoThumbmail';
import Constants from '../../services/ConstantsService';
import Scrollbar from 'react-custom-scrollbars';

import './Education.scss';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['histoire', 'geographie', 'langues', 'mathematiques', 'sciences', 'philosophie', 'psychologie'],
            selectedTags: ['histoire', 'geographie', 'langues', 'mathematiques', 'sciences', 'philosophie', 'psychologie'],
            videos: Constants.VIDEOS.education.map(video => {
                video.tag = randomTag();
                return video;
            }),
            ctrlKey: false
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this._handleKeyDown.bind(this));
        document.addEventListener("keyup", this._handleKeyUp.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown.bind(this));
        document.removeEventListener("keyup", this._handleKeyUp.bind(this));
    }

    _handleKeyDown(event) {
        if (event.keyCode === 17 && !this.state.ctrlKey) {
            this.setState({
                ctrlKey: true
            })
        }
    }

    _handleKeyUp(event) {
        if (event.keyCode === 17 && this.state.ctrlKey) {
            this.setState({
                ctrlKey: false
            })
        }
    }

    _updateTagsFilter(tag) {
        let currentTags = this.state.selectedTags;

        const index = currentTags.findIndex(t => t === tag);

        if (this.state.ctrlKey) {
            ~index ? currentTags.splice(index, 1) : currentTags.push(tag);
        } else {
            currentTags = ~index && currentTags.length === 1 ? this.state.tags : [tag];
        }

        this.setState({selectedTags: currentTags});
    }

    render() {
        return (
            <div className="education">
                <Scrollbar>
                    <h1><i className="fa fa-book"/> Education</h1>
                    <div className="tags">
                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 25,
                        marginLeft: 25
                    }}>tags: </span>
                        {this.state.tags.map(tag => {
                            return <div onClick={this._updateTagsFilter.bind(this, tag)}
                                        className={className("tag", {selected: this.state.selectedTags.indexOf(tag) >= 0})}>
                                {tag}
                            </div>
                        })}
                    </div>
                    <div className="videos">
                        {
                            this.state.videos.filter(v => this.state.selectedTags.indexOf(v.tag) >= 0).map(video => {
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

function randomTag() {
    const tags = ['histoire', 'geographie', 'langues', 'mathematiques', 'sciences', 'philosophie', 'psychologie'];
    return tags[getRandomInt(0, tags.length - 1)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Education;