import 'aframe';
// import 'aframe-particle-system-component'; <Entity particle-system={{preset: 'snow'}}/>
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import Camera from './Camera'
import Cursor from './Cursor'
import Vids from './Vids'

import './VR.scss';

class VR extends React.Component {
    /*handleClick0 = () => {
        console.log('Clicked 0!');
        
                        <Entity material={{ src: `url(${photoUrl0})` }} position={{ x: 0, y: 0, z: -5 }} scale={{ x: 1.0, y: 1.0, z: 0.28 }} events={{ click: this.handleClick0 }} geometry={{ primitive: 'box' }} />
                <Entity material={{ src: `url(${photoUrl1})` }} position={{ x: 1, y: 1, z: -5 }} scale={{ x: 1.0, y: 1.0, z: 0.28 }} events={{ click: this.handleClick1 }} geometry={{ primitive: 'box' }} />
                <Entity material={{ src: `url(${photoUrl2})` }} position={{ x: 2, y: 0, z: -5 }} scale={{ x: 1.0, y: 1.0, z: 0.28 }} events={{ click: this.handleClick2 }} geometry={{ primitive: 'box' }} />

       
    }    
    handleClick1 = () => {
        console.log('Clicked 1!');
    }    
    handleClick2 = () => {
        console.log('Clicked 2!');
    } */
    render() {
        /*const photoUrl0 = require('../../images/random1.jpeg');
        const photoUrl1 = require('../../images/random2.jpeg');
        const photoUrl2 = require('../../images/random3.jpeg'); */
        return (
            <Scene className="VrRoot">
                 <Camera><Cursor/></Camera>
                 <Vids/>
                <Entity light={{ type: 'point' }} />
                <Entity text={{ value: 'Shared Horizons' }} />
            </Scene>
        );
    }
}
export default VR;
