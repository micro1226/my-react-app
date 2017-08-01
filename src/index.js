import './index.css';

import React from 'react';
import {render} from 'react-dom';

import App from './App';
import Homepage from './Homepage';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

render((
    <Router>
        <Route path="/" component={App} />
        <Route path="/homepage" component={Homepage} />
    </Router>
), document.getElementById('root')
)
// ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
