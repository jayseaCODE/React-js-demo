import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render(){
        const {title = 'Welcome to React'} = this.props;
        return (
            <header>
                <h1>{title}</h1>
            </header>
        );
    }
}

// Here you can define your PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;