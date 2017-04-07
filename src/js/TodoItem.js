import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
  }
  handleDeleteItem() {
    this.props.deleteItem(this.props.item.id);
  }
  handleClickItem() {
    this.props.clickItem(this.props.item.id);
  }
  render() {
    return (
      <div>
        <li className="todoItem">
          <input
            type="checkbox"
            onClick={this.handleClickItem}
          />
          {this.props.item.name}
        </li>
        <button
          onClick={this.handleDeleteItem}
        >
          Delete Item
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    completed: React.PropTypes.number,
  }).isRequired,
  deleteItem: React.PropTypes.func.isRequired,
  clickItem: React.PropTypes.func.isRequired,
};

export default TodoItem;
