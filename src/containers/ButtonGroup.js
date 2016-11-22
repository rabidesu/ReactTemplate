/**
 * Created by Nem on 19.11.2016.
 */
import React from 'react'

import Button from '../components/Button'

export default class ButtonGroup extends React.Component {

    onButtonClick(item) {
        this.props.changeButton(item.id);
    }

    render() {
        return <div className="button-group">
            {this.props.buttons.map((item) => <Button selected={item.selected} onClick={this.onButtonClick.bind(this, item)} name={item.name} key={item.id}/>)}
            </div>
    }
}