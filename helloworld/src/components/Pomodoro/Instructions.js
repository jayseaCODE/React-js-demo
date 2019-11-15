import React from 'react';
import {NavLink} from "react-router-dom";

const Instructions = () =>
(
        <div className="Instructions">
            <h1>How to use</h1>
            <p>Here are six steps:</p>
            <ol>
                <li>In our <NavLink to="/todolist">To Do List</NavLink>, add a task for you to do.</li>
                <li>Start the Pomodoro timer (traditionally to 25 minutes) by clicking on "Start Working".</li>
                <li>Work on the task.</li>
                <li>End work when the timer rings and put a checkmark on your task in the <NavLink to="/todolist">To Do List</NavLink>.</li>
                <li>If you have fewer than four tasks checkmarked, take a short break (3-5 minutes), then go to step 1.</li>
                <li>After completing 4 pomodoros, take a long break (15-30 minutes), "Clear All" your tasks, then go to step 1.</li>
            </ol>
        </div>
);

export default Instructions;