import React from "react";
function Task({ task }) {
  const { text, category } = task;

  const handleDeleteClick = () => {
    // Implement task deletion logic here
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}


export default Task;
