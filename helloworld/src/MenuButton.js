import React, {Component} from 'react';
import './MenuButton.css';

class MenuButton extends Component{
    render(){
        return (
            <button id="menuButton"
                    onMouseDown={this.props.handleMouseDown}/>
        )
    }
}

export default MenuButton;