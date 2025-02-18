const TaskCard = ({ task }) => {
    return (
      <div className="border p-4 rounded-lg shadow mb-4">
        <h3 className="text-xl font-bold mb-2">{task.type}</h3>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Assigned To:</strong> {task.AssignedTo}</p>
        <p><strong>Created By:</strong> {task.createdBy}</p>
        <p><strong>To be attended:</strong> {new Date(task.TobeattendedAt).toLocaleString()}</p>
        <p><strong>Comment:</strong> {task.comment}</p>
        {task.CompletedAt && (
          <p><strong>Completed At:</strong> {new Date(task.CompletedAt).toLocaleString()}</p>
        )}
      </div>
    );
};
  
export default TaskCard;