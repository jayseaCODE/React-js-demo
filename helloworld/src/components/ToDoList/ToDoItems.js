import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component
{
    constructor(props)
    {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    deleteItem(key)
    {
        this.props.delete(key);
    }

    createItem(item)
    {
        return <li  onClick={() => this.deleteItem(item.key)}
                    key={item.key}>
                {item.text}</li>
    }

    render()
    {
        const items = this.props.entries;
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {items.map(this.createItem)}
                </FlipMove>
            </ul>
        )
    }
}

export default ToDoItems;