import React, {Component} from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  addItem(e)
  {
    var itemArray = this.state.items;
    if (this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()    
        }
      );     
      this.setState({items: itemArray});
      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();
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
    const checkInputElement = this._inputElement.value;
    // alternativeInput and checkInputElement should contain the same value
  }

  render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input  ref={(a)=>this._inputElement = a} 
                      placeholder="enter task"
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