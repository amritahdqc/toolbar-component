import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading }) => {
    return (
        <h1>{this.props.heading}</h1>
    )
}
Header.propTypes = {
    heading: PropTypes.string.isRequired
};

export default Header;
