import React from 'react';

import '../styles/table.less'

import TableRow from '../components/TableRow'

export default class Table extends React.Component {
    componentDidMount() {
        this.props.handleGetData();
    }

    onSelectRow(id) {
        this.props.selectRow(this.props.selected, id);
    }

    render() {
        return <div>
            <table>
            <thead>
            <tr>
            {this.props.header.map( (item, index) =>
                    <th key={index}>{item}</th>
            )}
            </tr>
            </thead>
            <tbody>
            {this.props.data.map( (item, index) => <TableRow
                selected={this.props.selected.includes(item['id'])}
                key={item['id']} data={item} fieldNames={this.props.fieldNames}
                onClick={this.onSelectRow.bind(this, item['id'])}
            />)}
            </tbody>
        </table>
            {this.props.error ? <p>Не удалось загрузить данные для отображения</p> : ''}
        </div>
    }
}