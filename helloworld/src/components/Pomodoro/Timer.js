import React, {Component} from 'react';
import Instructions from './Instructions';

class Timer extends Component{
    constructor()
    {
        super();

        // Initial state
        this.state = {
            alert: {
                type: '',
                message: '',
            },
            time: 0,
        };

        // Defined times for working, short and long breaks...
        this.timesFor = {
            working: 1500, //milliseconds
            shortBreak: 300,
            longBreak: 900,
        }
    }

    componentDidMount()
    {
        // Set time for working
        this.setState({
            time: this.timesFor.working,
        });
    }

    countDown = () => 
    {
        // If time reaches 0, then we display alert!
        if (this.state.time === 0)
        {
            this.setState({
                alert: {
                    type: 'buzz',
                    message: 'Buzzzzzzzz!',
                }
            });
        }
        else {
            // Decrease the time by 1 second...
            this.setState({
                time: this.state.time - 1
            });
        }
    }
    restartInterval = () =>
    {
        // Clearing the interval
        clearInterval(this.interval);

        // Execute countDown function every second
        this.interval = setInterval(this.countDown, 1000);
    }
    setTimer = newTime =>
    {
        this.restartInterval();
        this.setState({
            time: newTime
        });
    }
    setTimeForWorking = () =>
    {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working!'
            }
        });
        return this.setTimer(this.timesFor.working);
    }
    setTimeForShortBreak= () =>
    {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        });
        return this.setTimer(this.timesFor.shortBreak);
    }
    setTimeForLongBreak= () =>
    {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        });
        return this.setTimer(this.timesFor.longBreak);
    }

    displayTimer = seconds => 
    {
        // Formating the time into mm:ss
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);
        // It shouldn't be more than 3600, as our this.timeFor maximum is only minutes and not hours

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    render()
    {
        const { 
            alert: { type, message }, 
            time 
        } = this.state;

        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>
                <div className="timer">
                    {this.displayTimer(time)}
                </div>
                <div className="types">
                    <button className="working"
                            onClick={this.setTimeForWorking}
                    > Start Working </button>
                    <button className="shortBreak"
                            onClick={this.setTimeForShortBreak}
                    > Short Break </button>
                    <button className="longBreak"
                            onClick={this.setTimeForLongBreak}
                    > Long Break </button>
                </div>
                <Instructions/>
            </div>
        )
    }
}

export default Timer;