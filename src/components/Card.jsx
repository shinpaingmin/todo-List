/* eslint-disable eqeqeq */
import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({updateStatus, deleteTasks}) => {
  const tasks = useContext(ThemeContext);

  //confirm
  const deleteTasksHandler = (id) => {
    if(window.confirm("Are you sure to delete task?")) {
      deleteTasks(id);
    }
  }

  if(JSON.stringify(tasks)!=="{}"){
    return (
        <div>
          <ul className="list-group">
            {tasks.map((task) => (
              <li className={task.completed == true? "list-group-item my-3 bg-success" : "list-group-item my-3 bg-danger"} key={task.id}>
                <div className="row">
                  <div className="offset-1 col-9">
                    <input type="checkbox" name="checkbox" className="mx-3" defaultChecked={task.completed} onChange={()=>updateStatus(task.id, !task.completed)}/>
                    <label htmlFor="checkbox" className="text-decoration-line-through">{task.name}</label>
                  </div>
                  <div className="col-2">
                    <i className="fa-sharp fa-solid fa-xmark" onClick={()=>deleteTasksHandler(task.id)}></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
  }
};

export default Card;
