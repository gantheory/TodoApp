import React, { Component } from 'react';
import '../css/TodoItem.css';

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
        {/*
        <input
          type="checkbox"
          onClick={this.handleClickItem}
        />
        {this.props.item.name}
        <button
          onClick={this.handleDeleteItem}
        >
          Delete Item
        </button>
        */}
        {/*
        <Checkbox
          label={this.props.item.name}
          style={styles.checkbox}
          onClick={this.handleClickItem}
        />
        */}
        <input
          type="checkbox"
          onClick={this.handleClickItem}
        />
        <span>{this.props.item.name}</span>
        <i
          className="material-icons"
          onClick={this.handleDeleteItem}
        >
          delete
        </i>
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
