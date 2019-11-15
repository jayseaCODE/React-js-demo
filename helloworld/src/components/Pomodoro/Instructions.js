import React from 'react';

const Instructions = () =>
(
        <div className="Instructions">
            <h1>Underlying principles</h1>
            <p>There are six steps in the original Pomodoro technique:</p>
            <ol>
                <li>Decide on the task to be done.</li>
                <li>Set the Pomodoro timer (traditionally to 25 minutes).</li>
                <li>Work on the task.</li>
                <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
                <li>If you have fewer than four checkmarks, take a short break (3-5 minutes), then go to step 2.</li>
                <li>After 4 pomodoros, take a long break (15-30 minutes), reset your checkmark count to zero, then go to step 1.</li>
            </ol>
        </div>
);

export default Instructions;