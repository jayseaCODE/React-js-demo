import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction,
         Paper, TextField, Typography} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { withStyles, createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles'; //https://material-ui.com/styles/basics/#higher-order-component-api
import { orange } from '@material-ui/core/colors';

/*
 * Following tutorials from https://material-ui.com/getting-started/learn/
 */
class MaterialUIExample extends Component
{
    
    constructor(props){
        super(props);
        this.state = {
            exercises: [
                {id: 1, title: "Bench press"},
                {id: 2, title: "Pull ups"},
                {id: 3, title: "Squats"},
            ]
        };
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

    handleDelete = id => {
        this.setState(
            ({
                exercises
            }) =>
            ({
                exercises: exercises.filter(exercise => exercise.id !== id)
            })
        );
    }

    render()
    {
        // Using Destructuring assignment feature
        const { title, exercises } = this.state;
        const {classes} = this.props;

        return (
            <div>
                <ThemeProvider> {/* Provides the default Material UI theme*/}
                    <Typography variant='h1'
                                align='center'
                                gutterBottom
                                color='primary'>
                        Exercises
                    </Typography>
                    <Paper className={classes.ExercisesListStyle}>
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
                        <List>
                            {(
                                exercises.map(
                                    ({id, title}) => 
                                    <ListItem key={id}>
                                        <ListItemText primary={title}/>
                                        <ListItemSecondaryAction>
                                            <IconButton color='primary'
                                                        onClick={()=>this.handleDelete(id)}>
                                                <Delete />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Paper>
                    <ThemeProvider theme={outerTheme => createMuiTheme({
                        // Creating our own Material UI theme, based off the outerTheme which is the default Material UI theme
                            ...outerTheme,
                            palette: {
                                primary: {      
                                    light: orange[200], // same as '#FFCC80',      
                                    main: '#FB8C00', // same as orange[600]      
                                    dark: '#EF6C00',      
                                    contrastText: 'rgb(0,0,0)'    
                                }  
                            }
                        })}>
                        <Typography variant='body1'
                                    align='left'
                                    gutterBottom
                                    color='primary'>
                            Below is the same list as above, with a different theme applied, including this text
                        </Typography>
                        <Paper className={classes.ExercisesListStyle}>
                            <List>
                                {(
                                    exercises.map(
                                        ({id, title}) => 
                                        <ListItem key={id}>
                                            <ListItemText primary={title}/>
                                            <ListItemSecondaryAction>
                                                <IconButton color='primary'
                                                            onClick={()=>this.handleDelete(id)}>
                                                    <Delete />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                )}
                            </List>
                        </Paper>
                    </ThemeProvider>
                </ThemeProvider>
            </div>
        );
    }
}

const styles = { 
    ExercisesListStyle: 
    {
        margin: 20, padding: 20, maxWidth: 400,
    }
};

// Remember Prop-Types is only checked when in development mode - for performance reasons
MaterialUIExample.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIExample);