import React, {Component} from 'react';
import './MenuContainer.css'
import MenuButton from './MenuButton';
import ToDoList from './ToDoList';

class MenuContainer extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            "visible" : false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    toggleMenu()
    {
        this.setState((prevState) => 
        {
            this.state = {
                "visible" : !prevState
            }
        })
    }

    handleMouseDown(event)
    {
        this.toggleMenu();
        console.log("Mouse clicked");
        event.stopPropagation();
    }

    render()
    {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <div className="toDoList">
                    <ToDoList/>
                </div>
            </div>
        )
    }
}

export default MenuContainer;