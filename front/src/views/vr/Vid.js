import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import classNames from 'classnames'

export default class Vid extends Component {
    render() {
        const { id, name, photoUrl } = this.props

        const { width, height, depth } = this.props
        const { x, y, z } = this.props.position
        const color = '#ffffff'

        return (
            <Entity geometry={{ 'primitive': 'box', width: width, height: height, depth: depth }}
                material={{ src: `url(${photoUrl})`, color }}
                position={`${x} ${y} ${z}`}
                onClick={() => { this.props.onClick(id) }} />
        )
    }
}
