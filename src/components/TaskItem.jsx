import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
    }
  };

  return (
    <div className="task-item p-4 border border-gray-300 rounded-md mb-2 h-auto bg-white shadow-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
            className="border p-1 mb-2 w-full"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            className="border p-1 mb-2 w-full"
          />
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
            className="border p-1 mb-2 w-full"
          />
          <select
            value={updatedTask.priority}
            onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
            className="border p-1 mb-2 w-full"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            value={updatedTask.assignedUser}
            onChange={(e) => setUpdatedTask({ ...updatedTask, assignedUser: e.target.value })}
            className="border p-1 mb-2 w-full"
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-gray-300 text-black px-2 py-1 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-black text-lg">{task.title}</h3>
          <p className="text-black font-medium mb-2">{task.description}</p>
          <p className="text-black font-medium">Due Date: {task.dueDate}</p>
          <p className="text-black font-medium">Priority: {task.priority}</p>
          <p className="text-black font-medium">Status: {task.status}</p>
          <p className="text-black font-medium">Assigned User: {task.assignedUser}</p>
          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => {
                setIsEditing(true);
                onEdit(task.id);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
