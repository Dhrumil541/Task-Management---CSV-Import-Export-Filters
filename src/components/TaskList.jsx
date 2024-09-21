import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskFilters from './TaskFilters'; // Make sure to import your TaskFilters component

const TaskList = ({ tasks, onEdit, onDelete, onUpdate }) => {
  const [filters, setFilters] = useState({ status: '', priority: '', dueDate: '' });

  // Function to filter tasks based on current filters
  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filters.status ? task.status === filters.status : true;
    const matchesPriority = filters.priority ? task.priority === filters.priority : true;
    const matchesDueDate = filters.dueDate ? task.dueDate === filters.dueDate : true;
    
    return matchesStatus && matchesPriority && matchesDueDate;
  });

  return (
    <div>
      <TaskFilters onFilterChange={setFilters} /> {/* Pass setFilters to handle filter changes */}
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      {filteredTasks.length === 0 && <p className="text-center">No tasks available.</p>}
    </div>
  );
};

export default TaskList;
