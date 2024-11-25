
 import { Provider } from 'react-redux';
 import store from './JS/Store'
import AddTask from './component/Addtask';
import ListTask from './component/ListTask';

import './styles.css';

function App() {
  return (
    <Provider store={store}>
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Todo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  </Provider>

  );
}

export default App;
