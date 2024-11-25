import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../JS/slice/taskSlice'; 
//import styles from '../styles/Todo.module.css';

const Task = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div >
      <span>{todo.text}</span>
      <div >
        <button 
          onClick={() => dispatch(toggleTask(todo.id))}
          
        >
          {todo.completed ? 'Done' : 'Not Done'}
        </button>
        <button 
          onClick={() => dispatch(deleteTask(todo.id))}
          
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;