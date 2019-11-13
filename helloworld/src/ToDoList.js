import React, {Component} from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

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
            text: this.state.task, //this._inputElement.value,
            key: Date.now() 
          },
        ]
      });
      //this._inputElement.value = "";
    }
  }
  deleteItem(key)
  {
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
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
      return (
        <div className="todoListMain">
          <div className="header">
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
        </div>
      );
  }
}
export default ToDoList;