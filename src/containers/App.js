import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'
import * as buttonGroupActions from '../actions/ButtonGroupActions'
import * as tableActions from '../actions/TableActions'

import ButtonGroup from '../containers/ButtonGroup'

import Table from '../containers/Table'

class App extends Component {
    render() {
        const { user, page, buttons, table } = this.props;
        const { getPhotos } = this.props.pageActions;
        const { handleLogin } = this.props.userActions;
        const { changeButton } = this.props.buttonGroupActions;
        const { handleGetData, selectRow } = this.props.tableActions;


        return <div className="row">
            {/*<Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />*/}
            {/*<User name={user.name} handleLogin={handleLogin} error={user.error} />*/}
            <Table header={table.header} data={table.data} handleGetData={handleGetData} error={table.error} fieldNames={table.fieldNames} selectRow={selectRow} selected={table.selected}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page,
        buttons: state.buttons.buttons,
        table: state.table
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        buttonGroupActions: bindActionCreators(buttonGroupActions, dispatch),
        tableActions: bindActionCreators(tableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)