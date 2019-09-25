import React, {Component} from 'react';
import './MenuButton.css';

class MenuButton extends Component{
    // Lifecycle method, allowing us to block the call to render()
    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.handleMouseDown === this.props.handleMouseDown)
        {
            return false;
        }
        else {
            return true;
        }
    }

    render(){
        return (
            <button id="menuButton"
                    onMouseDown={this.props.handleMouseDown}/>
        )
    }
}

export default MenuButton;