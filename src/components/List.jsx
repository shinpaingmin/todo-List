import React from 'react'
import Card from './Card'

const List = ({tasks, updateStatus, deleteTasks}) => {
  return (
    <div>
        <Card tasks={tasks} updateStatus={updateStatus} deleteTasks={deleteTasks}/>
    </div>
  )
}

export default List