import React from "react";

function CreateTask() {
  return (
    <div className="flex items-center justify-center  h-screen w-full p-10">
      <div>
        <form className="flex flex-col items-start justify-between ">
          <h3>Task Title</h3>
          <input type="text" placeholder="Enter Task Title" />
          <h3>Task Description</h3>
          <textarea placeholder="Enter Task Description" />
          <h3>Date</h3>
          <input type="date" />
          <h3>assign to </h3>
          <input type="text" placeholder="employee name " />
          <h3>category</h3>
          <input type="text" placeholder="design, dev, etc" />
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
