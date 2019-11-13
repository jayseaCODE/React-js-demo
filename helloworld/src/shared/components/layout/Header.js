import React from 'react';
import PropTypes from 'prop-types';

// Header - a functional/stateless component, for rendering static markup
const Header = props => {
    const {title = 'Welcome to React'} = props;
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

// Here you can define your PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;