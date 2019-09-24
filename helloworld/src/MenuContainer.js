import React, {Component} from 'react';
import './MenuContainer.css'
import Menu from './Menu';
import MenuButton from './MenuButton';
import ToDoList from './ToDoList';

class MenuContainer extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            visible : false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    toggleMenu()
    {
        this.setState((prevState) => (
            {
                visible : !prevState.visible
            }
        ));
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
                <Menu handleMouseDown={this.handleMouseDown}
                        menuVisibility={this.state.visible}/>
                <div className="toDoList">
                    <ToDoList/>
                </div>
            </div>
        )
    }
}

export default MenuContainer;