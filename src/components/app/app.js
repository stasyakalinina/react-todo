import React from 'react';
import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

const App = () => {
  const todoData = [
    { label: 'Drink coffee', important: false, id: 1},
    { label: 'Make awesome app', important: true, id: 2},
    { label: 'Have a lunch', important: false, id: 3  },
  ];

  return (
    <div className="container todo-app">
      <AppHeader more={5} done={2} />
      <main>
        <div className="todo-app__panel">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} />
      </main>
    </div>
  );
}

export default App;