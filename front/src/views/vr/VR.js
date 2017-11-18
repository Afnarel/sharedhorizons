import 'aframe';
// import 'aframe-particle-system-component'; <Entity particle-system={{preset: 'snow'}}/>
import {Entity, Scene} from 'aframe-react';
import React from 'react';

import './VR.scss';

class VR extends React.Component {
  render () {
    return (
      <Scene className="VrRoot">
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity light={{type: 'point'}}/>
        <Entity text={{value: 'Shared Horizons'}}/>
      </Scene>
    );
  }
}
export default VR;
