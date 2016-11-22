/**
 * Created by Nem on 22.11.2016.
 */
import React from 'react'

import '../styles/table.less'

export default class TableRow extends React.Component {
    render() {
        return <tr selected={this.props.selected} onClick={this.props.onClick} >
            {this.props.fieldNames.map((item, index) =>
                <td key={this.props.data['id'] + '_' + index}>
                <p className={this.props.selected ? 'selected' : ''}>{this.props.data[item]}</p>
            </td>)}
        </tr>
    }
}
