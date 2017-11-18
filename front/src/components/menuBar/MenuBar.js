import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './MenuBar.scss';

const menuTabs = [
    {
        name: 'Education',
        link: '/categories/music',
        icon: 'fa-book'
    },
    {
        name: 'Culture',
        link: '/categories/sport',
        icon: 'fa-video-camera'
    },
    {
        name: 'Société',
        link: '/categories/gaming',
        icon: 'fa-user'
    },
    {
        name: 'Compétences',
        link: '/categories/gaming',
        icon: 'fa-superscript'
    }
];

class MenuBar extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    _handleTabClick(index, tab) {

    }

    render() {
        return (
            <div className={className('menuBar')}>
                <div className="logo">
                    <img src={require("../../images/logo.png")} alt=""/>
                </div>
                <div className="tabs">
                    {
                        menuTabs.map(tab => {
                            return (
                                <div className="tab">
                                        <i className={className('icon', 'fa', tab.icon)}/>
                                    {tab.name.toUpperCase()}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MenuBar;


