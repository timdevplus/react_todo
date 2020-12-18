// Extern Components
import TodoItem from '../TodoItem/TodoItem.component';

// Styles
import './Todo.styles.css';

// Component
const Todo = ({
   todoList,
   inputTextBuffer,
   handleTodoInputChange,
   handleAddTodoItem,
   handleRemoveTodoItem,
   handleToggleComplete
}) => {
   return (
      <div className='todoList'>
         <div className='todoList__header'>
            <input
               className='todoList__header--input'
               type='text'
               value={inputTextBuffer}
               placeholder='Todo_'
               onChange={handleTodoInputChange}
            />
            <button
               className='todoList__header--addBtn'
               onClick={handleAddTodoItem}
            >
               <i className='fas fa-plus'></i>
            </button>
         </div>
         <ul className='todoList__body'>
            {todoList.map((todo) => (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleRemoveTodoItem={handleRemoveTodoItem}
                  handleToggleComplete={handleToggleComplete}
               />
            ))}
         </ul>
      </div>
   );
};

export default Todo;
