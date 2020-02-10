import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends Component {

  maxId = 100;

  createItem = (text) => {
    return {
      label: text,
      important: false,
      done: false,
      id: this.maxId++,
    };
  };

  state = {
    todoData: [
      this.createItem('Drink coffee'),
      this.createItem('Make awesome app'),
      this.createItem('Have a lunch'),
    ],
    searchText: '',
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      let index = todoData.findIndex((el) => el.id === id);

      let newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray,
      }
    });
  };

  addItem = (text) => {
    let newItem = this.createItem(text);

    this.setState(({todoData}) => {
      let newArr = [
        ...todoData,
        newItem];

      return {
        todoData: newArr,
      }
    });
  };

  toggleProperty(arr, id, propName) {
    let index = arr.findIndex((el) => el.id === id);
    let oldItem = arr[index];
    let newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (currentText) => {
    this.setState({
      searchText: currentText,
    })
  };

  onFilterChange = (currentFilter) => {
    this.setState({
      filter: currentFilter,
    })
  };

  search(items, searchText) {
    if(searchText.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, searchText, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, searchText), filter);

    let doneCount = todoData.filter((el) => el.done).length;
    let todoCount = todoData.length - doneCount;

    return (
      <div className="container todo-app">
        <AppHeader more={todoCount} done={doneCount} />
        <main>
          <div className="todo-app__top">
            <SearchPanel onSearchChange={this.onSearchChange} />
            <ItemStatusFilter
              onFilter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <div className="todo-app__bottom">
            <ItemAddForm
              onItemAdded={this.addItem}
            />
          </div>
        </main>
      </div>
    );
  }
}