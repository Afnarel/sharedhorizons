import React from 'react';

import './NotFound.scss';

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            errorMessage: '',
            nodes: [],
            loadedPage: false
        }
    }

    render() {
        return (
            <div className='notFoundView'>
                <div className="notFound">
                    <div className="errorContainer">
                        <div className="errorCode">404</div>
                        <br/><br/><br/><br/>
                        <div className="errorMessage">This page doesn't exist</div>
                        <div className="button">
                            <a href="/home">
                                <div className="backButton">BACK TO HOME</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;