import React, { useState } from 'react'


const Form = ({addTasks}) => {
  const [newTask, setNewTask] = useState('');

  //clear function
  const addTasksHandler = () => {
    addTasks(newTask);
    setNewTask('');
  }
  return (
    <div className='mb-3'>
        <h1 className='text-center mb-4'>React Todo List Project</h1>
        <div className="row">
            <div className="offset-3 col-6">
                <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} className='form-control' placeholder='Enter Tasks ... '/>
            </div>
            <div className="col-3">
                <button type="button" className='btn btn-primary' onClick={()=>addTasksHandler()}><i className="fa-solid fa-plus"></i>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Form