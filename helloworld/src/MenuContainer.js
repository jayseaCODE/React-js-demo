import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './MenuContainer.css'
import Menu from './Menu';
import MenuButton from './MenuButton';
import ToDoList from './components/ToDoList/ToDoList';
import PomodoroTimer from './components/Pomodoro/Timer';
import MaterialUIExample from './MaterialUIExample';

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
            <HashRouter forceRefresh={true}>
                <div>
                    <MenuButton handleMouseDown={this.handleMouseDown}/>
                    <Menu handleMouseDown={this.handleMouseDown}
                            menuVisibility={this.state.visible}/>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/todolist">To Do List</NavLink></li>
                        <li><NavLink to="/pomodorotimer">Pomodoro Timer</NavLink></li>
                        <li><NavLink to="/materialuiexample">Material UI Component</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/"/>
                        <Route path="/todolist" component={ToDoList}/>
                        <Route path="/pomodorotimer" component={PomodoroTimer}/>
                        <Route path="/materialuiexample" component={MaterialUIExample}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MenuContainer;