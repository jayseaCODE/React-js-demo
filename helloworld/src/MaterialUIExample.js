import React, {Component} from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';

/*
 * Following tutorials from https://material-ui.com/getting-started/learn/
 */
class MaterialUIExample extends Component
{
    constructor(props){
        super(props);

        this.state = {};
    }

    // Using Arrow function feature which allows us to bind the 'this' object in our methods instead of binding it in the constructor
    handleChange =  ({
        target: {
            name,
            value
        }
    }) => this.setState( {
        [name]: value
    })

    handleSubmit = e => {
        // Prevent the default behavior of Form Submit, which reloads the whole page
        e.preventDefault();
        // Check if title field is non-empty
        if (this.state.title)
        {
            // Uses setState() updated function to mitigate async updates
            this.setState(
                ( 
                    // Destructure exercises and title from the prevState {} object
                    {
                        exercises, 
                        title
                    } 
                ) =>
                (
                    {
                        // Spead out exercises into the next state with a new exercises object
                        exercises: [ ...exercises, {title, id: Date.now()} ],
                        // Reset the title field
                        title: ''
                    }
                )
            );
        }
    }

    render()
    {
        // Using Destructuring assignment feature
        const { title, exercises } = this.state;

        return (
            <div>
                <Paper>
                    <Typography variant='h1'
                                align='center'
                                gutterBottom>
                        Exercises
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        {/* The name 'title' is being used in handleChange */}
                        <TextField
                            name="title"
                            label="Type in an exercise here"
                            value={title}
                            onChange={this.handleChange}
                            margin='normal'/>
                        <Button type="submit"
                                variant="contained" 
                                color="primary">
                            Submit
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default MaterialUIExample;