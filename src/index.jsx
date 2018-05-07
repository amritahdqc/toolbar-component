import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './containers/App';

const toolbars = {
    "title": "Nav toolbar",
    "contents": [
        {"name": "My Account", "link": "/Profile"},
        {"name": "Logout", "link": "/Logout"}
    ]
};

ReactDOM.render(
  <App heading = "Main Heading" toolbars = {toolbars} />,
  document.getElementById('root'),
);
