import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './Sidenav.scss';

const tabs = [
    [
        {
            name: 'Home',
            link: '/home',
            icon: 'fa-home'
        },
        {
            name: 'Trending',
            link: '/trending',
            icon: 'fa-bolt'
        },
        {
            name: 'History',
            link: '/history',
            icon: 'fa-clock-o'
        }
    ],
    [
        {
            name: 'Edit profile',
            link: '/editprofile',
            icon: 'fa-edit'
        },
        {
            name: 'sign out',
            link: '/signout',
            icon: 'fa-sign-out'
        },
    ],
    [
        {
            name: 'Settings',
            link: '/settings',
            icon: 'fa-gear'
        },
        {
            name: 'Help',
            link: '/help',
            icon: 'fa-question-circle'
        }
    ]
];

class Sidenav extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="sidenav">
                <div className="tabs">
                    {
                        tabs.map(tabs2 => {
                            return (
                                <div className="tabsGroup">
                                    {
                                        tabs2.map((tab, index) => {
                                            return (
                                                <a href={tab.link}>
                                                    <div className={className('tab', {last: index === tabs2.length -1})}>
                                                        <i className={className('icon', 'fa', tab.icon)}/>
                                                        {tab.name.toUpperCase()}
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                    <div className="separator"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Sidenav;