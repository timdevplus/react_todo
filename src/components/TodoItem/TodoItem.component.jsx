// Styles
import './TodoItem.styles.css';

// Component
const TodoItem = ({ todo, handleRemoveTodoItem, handleToggleComplete }) => {
   return (
      <li className='todoList__body--item'>
         {todo.completed ? (
            <i className='far fa-check-circle'></i>
         ) : (
            <i className='far fa-circle'></i>
         )}
         <span
            className='align-left'
            onClick={() => handleToggleComplete(todo)}
         >
            {todo.name}
         </span>
         <button
            className='remove-btn'
            onClick={() => handleRemoveTodoItem(todo.id)}
         >
            <i className='far fa-times-circle'></i>
         </button>
      </li>
   );
};

export default TodoItem;
