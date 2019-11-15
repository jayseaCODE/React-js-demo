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
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markAsCompleted = this.markAsCompleted.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount()
  {
    this.checkLocalStorageForItems();
  }

  checkLocalStorageForItems = () => 
  {
    var updatedToDoList = localStorage.getItem('ToDoList');
    if (updatedToDoList !== null)
    {
      this.setState({
        items: JSON.parse(updatedToDoList),
      });
    }
  }

  addItem(event)
  {
    // Prevent default to avoid the actual form submit...
    event.preventDefault();

    //if (this._inputElement.value !== "") {
    if (this.state.task.trim() !== '') 
    {
      let newArrayOfItems = [
        ...this.state.items,
        {
          id: uuidv4(),
          text: this.state.task, //this._inputElement.value,
          key: Date.now(),
          completed: false,
        },
      ];

      this.setState({
        task: '',
        items: newArrayOfItems,
      });

      // Save updated Items to local storage
      localStorage.setItem('ToDoList', JSON.stringify(newArrayOfItems));
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

    // Save updated Items to local storage
    localStorage.setItem('ToDoList', JSON.stringify(filteredItems));
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

    // Save updated Items to local storage
    localStorage.setItem('ToDoList', JSON.stringify(this.state.items));
  }
  clearAllItems = () =>
  {
    this.setState({
      items: [],
    })
    // Clear local storage too
    localStorage.clear('ToDoList');
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
              <form onSubmit={this.addItem} onReset={this.clearAllItems}>
                <input //ref={(a)=>this._inputElement = a}
                        placeholder="enter task"
                        value={this.state.task}
                        onChange={this.handleOnChange}>
                </input>
                <button type="submit">Add</button>
                <button className="reset" type="reset">Clear All</button>
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