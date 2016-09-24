import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <Route path="/about" component={AboutPage} />
            <Route path="/inbox" component={InboxPage} >
                <Route path="/inbox/message/:messageId" component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('mount-point')
);

