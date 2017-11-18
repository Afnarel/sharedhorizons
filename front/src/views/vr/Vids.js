import { Entity } from 'aframe-react'
import React, { Component } from 'react'
import Vid from './Vid'
import { circularPositionFromIndex } from './calculations'

const styles = require('./Vids.scss')
const boxSize = 0.5

class Vids extends Component {

    render() {
        let vids = [
            { id: '1', name: 'BL', type: 'hacker', photoUrl: '/dist/random1.jpeg' },
            { id: '2', name: 'BL', type: 'hacker', photoUrl: '/dist/random2.jpeg' },
            { id: '3', name: 'BL', type: 'hacker', photoUrl: '/dist/random3.jpeg' },
            { id: '4', name: 'BL', type: 'hacker', photoUrl: '/dist/random4.jpeg' },
            { id: '5', name: 'BL', type: 'hacker', photoUrl: '/dist/random5.jpeg' },
            { id: '6', name: 'BL', type: 'hacker', photoUrl: '/dist/random6.jpeg' },
            { id: '7', name: 'BL', type: 'hacker', photoUrl: '/dist/random7.jpeg' },
            { id: '8', name: 'BL', type: 'hacker', photoUrl: '/dist/random8.jpeg' },
            { id: '9', name: 'BL', type: 'hacker', photoUrl: '/dist/random9.jpeg' },
            { id: '10', name: 'BL', type: 'hacker', photoUrl: '/dist/random10.jpeg' },
            { id: '11', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '12', name: 'BL', type: 'hacker', photoUrl: '/dist/random12.jpeg' },
            { id: '13', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '14', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '15', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '16', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '17', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '18', name: 'BL', type: 'hacker', photoUrl: '/dist/random11.jpeg' },
            { id: '20', name: 'L', type: 'hipster', photoUrl: '/dist/random12.jpeg' }
        ]
        for (let i = 0; i < 120; i++) {
            vids.push({
                id: `${i}`,
                name: 'name',
                type: 'hacker',
                photoUrl: `/dist/random${i%12 + 1}.jpeg`
            }
            )
        }
        return (
            <Entity>
                {vids.map(this.renderVid.bind(this))}
                <a-animation attribute="rotation"
                    dur="360000"
                    fill="forwards"
                    to="0 360 0"
                    repeat="indefinite"
                    easing="linear">
                </a-animation>
            </Entity>
        )

    }

    renderVid(member, index) {
        let position = circularPositionFromIndex(index, boxSize)
        
        return (
            <Vid key={index} id={member.id} name={member.name} photoUrl={member.photoUrl}
                type={member.type}
                width={boxSize} height={boxSize} depth={boxSize}
                position={position}
                index={index}
            />
        )
    }
}

export default Vids