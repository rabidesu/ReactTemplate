/**
 * Created by Nem on 19.11.2016.
 */
import React, { PropTypes } from 'react'

import '../styles/button.less'

export default class Button extends React.Component {

    render() {

        return <button onClick={this.props.onClick} className={this.props.selected ? 'selected' : 'not-selected'}>{this.props.name}</button>
    }
}

Button.PropTypes = {
    name: PropTypes.string.isRequired
};