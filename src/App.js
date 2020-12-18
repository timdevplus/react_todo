// Modules
import { useState, useEffect } from 'react';
import idGen from './util/idGen';

// Extern Components
import Todo from './components/Todo/Todo.component';

// Styles
import './App.css';

// File Component
function App() {
   const [inputTextBuffer, setInputTextBuffer] = useState('');
   const [todoList, setTodoList] = useState(() => {
      return (
         (localStorage.getItem('todoList') &&
            JSON.parse(localStorage.getItem('todoList'))) ||
         []
      );
   });

   useEffect(() => localStorage.setItem('todoList', JSON.stringify(todoList)), [
      todoList
   ]);

   const handleToggleComplete = (todo) => {
      const updatedTodoList = todoList.map((currentTodo) => {
         return currentTodo.id === todo.id
            ? { ...todo, completed: !todo.completed }
            : currentTodo;
      });
      setTodoList(updatedTodoList);
   };

   const handleTodoInputChange = (e) => {
      setInputTextBuffer(e.target.value);
   };

   const handleAddTodoItem = (e) => {
      if (inputTextBuffer !== '') {
         setTodoList([
            ...todoList,
            { id: idGen(), name: inputTextBuffer, completed: false }
         ]);
         setInputTextBuffer('');
      }
   };

   const handleRemoveTodoItem = (id) => {
      setTodoList(todoList.filter((todo) => todo.id !== id));
   };

   return (
      <Todo
         todoList={todoList}
         inputTextBuffer={inputTextBuffer}
         handleTodoInputChange={handleTodoInputChange}
         handleAddTodoItem={handleAddTodoItem}
         handleRemoveTodoItem={handleRemoveTodoItem}
         handleToggleComplete={handleToggleComplete}
      />
   );
}

export default App;
