import React, { Component } from 'react';
import TodoList from './TodoList';
import '../css/TodoApp.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoLists: [],
      newListName: '',
      completedItemNum: [0, 0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChangeListName = this.handleChangeListName.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
  }
  handleChange(event) {
    this.setState({
      newListName: event.target.value,
    });
  }
  handleKeyDown(event) {
    if (event.keyCode === 13 && this.state.newListName !== '') {
      event.preventDefault();
      const todoLists = this.state.todoLists;
      todoLists.push({
        id: this.state.todoLists.length,
        name: this.state.newListName,
        items: [],
      });
      this.setState({
        todoLists,
        newListName: '',
      });
    }
  }
  handleChangeListName(listID, newListName) {
    const targetList = this.state.todoLists[listID];
    targetList.name = newListName;
    this.setState({ targetList });
  }
  handleDeleteList(listID) {
    delete this.state.todoLists[listID];
    this.setState({ todoLists: this.state.todoLists });
  }
  handleAddItem(listID, newItemName) {
    const targetList = this.state.todoLists[listID];
    targetList.items.push({
      id: targetList.items.length,
      name: newItemName,
      completed: 0,
    });
    const itemNum = this.state.completedItemNum;
    itemNum[0] += 1;
    this.setState({
      targetList,
      itemNum,
    });
  }
  handleDeleteItem(listID, itemID) {
    const itemNum = this.state.completedItemNum;
    itemNum[
      this.state.todoLists[listID].items[itemID].completed
    ] -= 1;
    this.setState({
      itemNum,
    });
    delete this.state.todoLists[listID].items[itemID];
    this.setState({
      todoLists: this.state.todoLists,
    });
  }
  handleClickItem(listID, itemID) {
    const targetList = this.state.todoLists[listID];
    const itemNum = this.state.completedItemNum;
    itemNum[
      targetList.items[itemID].completed
    ] -= 1;
    targetList.items[itemID].completed += 1;
    targetList.items[itemID].completed %= 2;
    itemNum[
      targetList.items[itemID].completed
    ] += 1;
    this.setState({
      targetList,
      itemNum,
    });
  }
  render() {
    return (
      <div className="todoApp">
        <h1 className="title">TODOs</h1>
        <input
          className="todoListsInput"
          placeholder="Your Todo List's Name"
          value={this.state.newListName}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className="todoLists">
          <ul>
            {this.state.todoLists.map(list =>
              <TodoList
                key={list.id}
                list={list}
                changeListName={this.handleChangeListName}
                deleteList={this.handleDeleteList}
                addItem={this.handleAddItem}
                deleteItem={this.handleDeleteItem}
                clickItem={this.handleClickItem}
              />,
            )}
          </ul>
        </div>
        <div>
          # of Active Items: {this.state.completedItemNum[0]}
        </div>
        <div>
          # of Completed Items: {this.state.completedItemNum[1]}
        </div>
      </div>
    );
  }
}

export default App;
