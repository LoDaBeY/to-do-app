import React, { useState } from "react";
import "./ToDoList.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  return (
    <section className="boxes">
      {tasks.map((task, index) => (
        <div className="todolist" key={index}>
          <div className="Name">
            <p>{task}</p>
          </div>
          <div className="Icons">
            <div>
              <CloseIcon className="CloseIcon" />
            </div>
            <div>
              <EditIcon className="EditIcon" />
            </div>
          </div>
        </div>
      ))}
      
      <form className="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="enter"
          id="textid"
          placeholder="Write here"
          value={taskInput}
          onChange={handleInputChange}
        />
        <input type="submit" value="Create"     id="submitt"/>
      </form>
    </section>
  );
}

export default ToDoList;
