import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import {useState, useEffect} from 'react';
import api from './api/api';
import ThemeContext from './context/ThemeContext';
import uuid from 'react-uuid';


function App() {
  //store api data
  const [tasks, setTasks] = useState([]);
  //Api call
  const fetchData = async() => {
    const res = await api.get('/todoList');
    setTasks(res.data);
  }
  useEffect(()=>{
    fetchData();
  }, [tasks]);

  //Add
  const addTasks = async(newTask) => {
    const addTask = {
      "id": uuid(),
      "name": newTask,
      "completed": false
    }
    await api.post('/todoList', addTask);
  }

  //update
  const updateStatus = async (id, completed) => {
    await api.patch( `/todoList/${id}`, {completed});
  }

  //delete
  const deleteTasks = async (id) => {
    await api.delete(`/todoList/${id}`);
  }

  return (
    <div className="mx-auto w-50 mt-3">
      <ThemeContext.Provider value={tasks}>
        <Form addTasks={addTasks}/>
        <List updateStatus={updateStatus} deleteTasks={deleteTasks}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
