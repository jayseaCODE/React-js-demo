import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './Menu.css';

class Menu extends Component {
    render()
    {
        var visibility = "hide";

        if (this.props.menuVisibility)
        {
            visibility = "show";
        }

        return(
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/todolist">To Do List</Link></h2>
            </div>);
    }
}

export default Menu;