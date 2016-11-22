/**
 * Created by Nem on 15.11.2016.
 */
import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import buttons from './button'
import table from './table'

export default combineReducers({
    page,
    user,
    buttons,
    table
})
