import { useState,useEffect } from "react";

const TaskList = ({ setLoading }) => {
    const [tasks,setTasks]=useState([])

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            setLoading(true)
            const response = await fetch('http://localhost:3000/tasks');
            const data = await response.json();
            setTasks(data);
          } catch (error) {
            console.error('Failed to fetch tasks:', error);
          } finally {
            setLoading(false)
          }
        };
    
        fetchTasks();
      }, []);

    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Created By</th>
                        <th>To Be Attended</th>
                        <th>Comment</th>
                        <th>Completed At</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.type}</td>
                            <td>{task.description.slice(0,20)}</td>
                            <td>{task.status}</td>
                            <td>{task.AssignedTo}</td>
                            <td>{task.createdBy}</td>
                            <td>{new Date(task.TobeattendedAt).toLocaleString()}</td>
                            <td>{task.comment}</td>
                            <td>
                                {task.CompletedAt
                                    ? new Date(task.CompletedAt).toLocaleString()
                                    : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
};

export default TaskList;
