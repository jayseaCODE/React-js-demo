import React, {Component} from 'react';
import './MenuContainer.css'

class MenuContainer extends Component
{
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