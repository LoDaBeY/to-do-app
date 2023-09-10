import React from "react";
import "./ToDoList.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
let textid = document.querySelector("#textid");

function ToDoList() { 
  const SubmitTask = () => {
    
  }

  const Delete = () => {
    textid.value = "";
  }
  return (
    <section class="boxes">
      <div class="todolist">
        <div className="Name">
          <p>Khaled Mohamed Elsayed Ghonim</p>
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
      <form className="submit">
        <input type="text" name="enter" id="textid" placeholder=" Write here" />
        <input type="button" defaultValue="create" id="submitt" onClick={SubmitTask} />
      </form>
    </section>
  );
}

export default ToDoList;
