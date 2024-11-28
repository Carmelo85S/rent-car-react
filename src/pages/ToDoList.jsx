//import useState to manage the state of the array
import { useState } from "react";
import "../style/Test/ToDoList.css";

const ToDoList = () => {
        const [tasks, setTasks] = useState([]);

  //this function take the input value and set it as element in the array
  const handleAddTask = () => {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        setTasks((t) => [...t, newTask]);
  };

  //this function remove the task by index
  const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
  };

  //this function move up the task. If the task is in the index position [0] nothing happen
  const handleMoveUpTask = (index) => {
    setTasks((prevTasks) => {
        if (index === 0) return prevTasks;

        //create a copy of the task[]
        const updatedTasks = [...prevTasks];
        
        //swap the task by index
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        return updatedTasks;
    });
  };

  //this function move down the task. If the task is in the index position [length-1] nothing happen, as it's the last task in the array
  const handleMoveDownTask = (index) => {
    setTasks((prevTasks) => {
        // Do nothing if the task is already at the bottom
        if (index === tasks.length - 1) return prevTasks;
        const updatedTasks = [...prevTasks];
        // Swap the tasks
        [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
        return updatedTasks;
    });
  };

  return (
    <div className="todo-wrapper">
      <section className="todo-container">
        <h1>To-Do List</h1>
      </section>
      <section className="form-container">
        <label htmlFor="taskInput">Insert task</label>
        <input type="text" id="taskInput" placeholder="Insert Task" />
        <button type="button" onClick={handleAddTask}>
          Add task
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
                <section className="button-container">
                    <button onClick={() => handleMoveUpTask(index)}>Up</button>
                    <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    <button onClick={() => handleMoveDownTask(index)}>Down</button>
                </section>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToDoList;
