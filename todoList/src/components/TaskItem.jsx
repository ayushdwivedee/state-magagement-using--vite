function TaskItem({item,handleDelete,handleToggle}) {
    return <div>
         <h2 style={{color:item.completed ? "green":"red"}}>{item.task}</h2>
         <button onClick={handleToggle}>{item.completed?"Yes":"No"}</button>
         <p>{item.taskAssignedTo}</p>
         <button onClick={handleDelete}>Delete</button>
         </div>;
  }
  
  export default TaskItem;
  