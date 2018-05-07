import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
// import {Router, Route} from 'react-router';

// Stateless component:
const App = ({ heading, toolbars }) => {
    return <React.Fragment>
                <Header heading={heading} />
                <Toolbar toolbars={toolbars} />
            </React.Fragment>
}

/* Another way to do it
class App extends Component {
    render() {
        return (
          <HeaderFragment heading={this.props.heading} />
        );
    }
}
*/
App.propTypes = {
    heading: PropTypes.string,
    toolbars: PropTypes.object
 };

App.defaultProps = {
    heading: 'Welcome',
    toolbars:   { "title": "Toolbar with links",
                 "contents": {
                     "name":"default",
                     "link" : "www.google.com"
                    }
                }
};

export default App;
