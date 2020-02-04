import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

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

ReactDOM.render(<App />, document.getElementById('root'));