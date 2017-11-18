import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './MenuBar.scss';

const menuTabs = [
    {
        name: 'Education',
        link: '/education',
        icon: 'fa-book'
    },
    {
        name: 'Culture',
        link: '/culture',
        icon: 'fa-video-camera'
    },
    {
        name: 'Société',
        link: '/societe',
        icon: 'fa-user'
    },
    {
        name: 'Compétences',
        link: '/competence',
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
                                    <a href={tab.link}>
                                    <i className={className('icon', 'fa', tab.icon)}/>
                                    {tab.name.toUpperCase()}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="vrButton">
                    <a href="/VR">
                        <svg viewBox="0 0 128 128"
                             height="40"
                             width="40">
                            <g transform="translate(0,-169)">
                                <path
                                    d="m 6.1518927,264.51559 c -2.7361679,-2.73623 -2.7361679,-58.20714 0,-60.94337 2.787136,-2.78708 113.2644273,-2.78708 116.0515573,0 2.73617,2.73623 2.73617,58.20714 0,60.94337 -1.30091,1.30085 -8.51449,1.94499 -21.78263,1.94499 H 80.583132 l -7.490845,-6.48336 c -4.120026,-3.56581 -8.131561,-6.48331 -8.914584,-6.48331 -0.783022,0 -4.794618,2.9175 -8.914583,6.48331 l -7.490907,6.48336 H 27.934582 c -13.268194,0 -20.4817767,-0.64414 -21.7826893,-1.94499 z M 40.331478,248.49328 c 4.464552,-2.0342 9.258742,-9.39621 9.258742,-14.21797 0,-14.30281 -17.626032,-21.75469 -27.678822,-11.7019 -13.0508431,13.05084 1.555325,33.60399 18.42008,25.91987 z m 66.112532,-2.97882 c 3.71571,-3.71578 4.73777,-6.19024 4.73777,-11.47053 0,-16.60556 -22.542313,-22.49753 -30.106915,-7.86912 -8.600628,16.63172 12.211401,32.49733 25.369145,19.33965 z"
                                    style={{fill: "#000000", strokeWidth: 1.6}}/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}

export default MenuBar;


