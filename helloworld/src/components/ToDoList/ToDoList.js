import React, {Component} from "react";
import uuidv4 from 'uuid/v4';
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";
import ToDoItemsV2 from "./ToDoItemsV2";

class ToDoList extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      task: '',
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markAsCompleted = this.markAsCompleted.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  addItem(event)
  {
    // Prevent default to avoid the actual form submit...
    event.preventDefault();

    //if (this._inputElement.value !== "") {
    if (this.state.task.trim() !== '') 
    {
      this.setState({
        task: '',
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            text: this.state.task, //this._inputElement.value,
            key: Date.now(),
            completed: false,
          },
        ]
      });
      //this._inputElement.value = "";
    }
  }
  deleteItem = key =>
  {
    // Filtering the items based on the specific item key timestamp...
    var filteredItems = this.state.items.filter(
      item => (item.key !== key)
    );
   // Update the local state items...
    this.setState({
      items: filteredItems
    });
  }
  markAsCompleted = id => {
    // Find the Item by id...
    const foundItem = this.state.items.find(
      item => item.id === id
    );

    // Update the found item's completed status...
    foundItem.completed = true;

    // Update the local state with new updated item...
    this.setState({
      items: [
        ...this.state.items,
      ]
    });
  }

  handleOnChange(event)
  {
    const alternativeInput = event.target.value;
    //const checkInputElement = this._inputElement.value;
    // alternativeInput and checkInputElement should contain the same value
    this.setState({
      task: event.target.value
    });
  }

  render() {
    let changeToDoListItemsApperance = false;
      return (
          <div className="todoListMain">
            <div className="header">
              {/*<button onClick={()=> { changeToDoListItemsApperance = !changeToDoListItemsApperance}}/>*/}
              <form onSubmit={this.addItem}>
                <input //ref={(a)=>this._inputElement = a}
                        placeholder="enter task"
                        value={this.state.task}
                        onChange={this.handleOnChange}>
                </input>
                <button type="submit">add</button>
              </form>
              <ToDoItems  entries={this.state.items}
                          delete={this.deleteItem} /> 
            </div>
            <ToDoItemsV2  items={this.state.items}
                        markAsCompleted={this.markAsCompleted}
                        delete={this.deleteItem}/>
          </div>
      );
  }
}
export default ToDoList;