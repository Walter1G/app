import { useState } from "react";

const AddTasksForm = ({ addTask }) => {
  const [task, setTask] = useState({
    type: "",
    description: "",
    createdBy: "",
    TobeattendedAt: "",
    status: "assigned",
    AssignedTo: "",
    comment: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  function handleAdd(e) {
    e.preventDefault();
    if (!task.description || !task.type) return;
    addTask({ ...task, id: Date.now(), createdAt: new Date().toISOString() });
    setTask({
      type: "",
      description: "",
      createdBy: "",
      TobeattendedAt: "",
      status: "assigned",
      AssignedTo: "",
      comment: "",
    });
  }
  return (
    <div className="addtaskform">
      <h2>Add Task</h2>
      <form
        className=""
        onSubmit={handleAdd}
      >
        <div className="group">
          <input
            type="text"
            name="type"
            value={task.type}
            onChange={handleChange}
            placeholder="Task Type"
            className="p-2 border rounded"
            required
          />
          <textarea
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 border rounded"
            required
                  />
                  </div>
              <div className="group">
          <input
            type="text"
            name="createdBy"
            value={task.createdBy}
            onChange={handleChange}
            placeholder="Created By"
            className="p-2 border rounded"
            required
          />
          <input
            type="datetime-local"
            name="TobeattendedAt"
            value={task.TobeattendedAt}
            onChange={handleChange}
            className="p-2 border rounded"
            required
                  />
                  </div>
              <div className="group">
          <input
            type="text"
            name="AssignedTo"
            value={task.AssignedTo}
            onChange={handleChange}
            placeholder="Assign To"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="comment"
            value={task.comment}
            onChange={handleChange}
            placeholder="Comment"
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTasksForm;
