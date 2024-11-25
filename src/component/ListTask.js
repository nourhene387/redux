import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './Task';


//C:\Users\nourh\OneDrive\Bureau\gomycode\redux\to_do_list\src\styles.css
const ListTask = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'done', 'notDone'
  const todos = useSelector(state => state.todos.todos);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.completed;
    if (filter === 'notDone') return !todo.completed;
    return true;
  });

  return (
    <div>
      <div >
        <button 
          onClick={() => setFilter('all')}
          
        >
          All
        </button>
        <button 
          onClick={() => setFilter('done')}
         
        >
          Done
        </button>
        <button 
          onClick={() => setFilter('notDone')}
          
        >
          Not Done
        </button>
      </div>

      <div >
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;