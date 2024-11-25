import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/slice/taskSlice';


const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text.trim()));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a New Todo"
       
      />
      <button type="submit" >
        Add
      </button>
    </form>
  );
};

export default AddTask;