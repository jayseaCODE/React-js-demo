import React, {Component} from 'react';
import './MenuContainer.css'
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

    render()
    {
        return (
            <div className="toDoList">
                <ToDoList/>
            </div>
        )
    }
}

export default MenuContainer;