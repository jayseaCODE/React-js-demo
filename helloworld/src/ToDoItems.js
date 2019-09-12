import React, {Component} from 'react';

class ToDoItems extends Component
{
    constructor(props)
    {
        super(props)

        this.createItem = this.createItem.bind(this)
    }

    createItem(item)
    {
        return <li key={item.key}>{item.text}</li>
    }

    render()
    {
        const items = this.props.entries;
        return (
            <ul className="theList">
                {items.map(this.createItem)}
            </ul>
        )
    }
}

export default ToDoItems;