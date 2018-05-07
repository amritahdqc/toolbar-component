import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.toolbars.title}</h2>
                <ul className="main-toolbar">
                    {this.props.toolbars.contents.map((content, i) =>
                            <li key={i}>
                                <a href={content.link}>{content.name}</a>
                            </li>
                    )}
                </ul>
            </React.Fragment>
            )
    }
}

Toolbar.propTypes = {
    toolbars: PropTypes.object.isRequired
};

export default Toolbar;