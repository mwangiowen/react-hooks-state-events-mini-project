import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Implement state to capture form input
  const [newTask, setNewTask] = useState({ text: "", category: categories[0] });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pass the new task to the callback prop
    onTaskFormSubmit(newTask);
    // Reset the form
    setNewTask({ text: "", category: categories[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={handleInputChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
