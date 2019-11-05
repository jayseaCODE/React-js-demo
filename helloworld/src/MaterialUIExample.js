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

    // Using Arrow function feature
    handleChange =  ({
        target: {
            name,
            value
        }
    }) => this.setState( {
        [name]: value
    })

    render()
    {
        // Using Destructuring assignment feature
        const { title } = this.state;

        return (
            <div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Paper>
                    <form>
                        <TextField
                            name="title"
                            label="Type in an exercise here"
                            value={title}
                            onChange={this.handleChange}
                            margin='normal'/>
                    </form>
                    <Typography variant='h1'
                                align='center'
                                gutterBottom>
                                    Exercises
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default MaterialUIExample;