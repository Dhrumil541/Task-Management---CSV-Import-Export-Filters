// Mock function to fetch tasks. Replace with actual API call.
export const fetchTasks = async (page) => {
  console.log('%cFetching tasks for page: ' + page, 'color: blue; font-weight: bold;');
  
  return {
    tasks: [
      { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2024-09-30', priority: 'high', status: 'pending', assignedUser: 'User 1' },
      { id: 2, title: 'Task 2', description: 'Description 2', dueDate: '2024-10-05', priority: 'medium', status: 'completed', assignedUser: 'User 2' },
      // Add more tasks as needed
    ],
    totalPages: 2, // Mock total pages for pagination
  };
};

// Function to handle CSV import
export const importTasksFromCSV = async (file) => {
  const text = await file.text();
  const lines = text.trim().split('\n'); // Trim to avoid empty lines
  
  const importedTasks = lines.slice(1).map((line) => {
    const [title, description, dueDate, priority, status, assignedUser] = line.split(',');
    return { title, description, dueDate, priority, status, assignedUser };
  });

  console.log('%cImported Tasks:', 'color: green; font-weight: bold;', importedTasks);
  return importedTasks; // Return imported tasks for further processing if needed
};

// Function to prepare tasks for CSV export
export const exportTasksToCSV = (tasks) => {
  const header = 'Title,Description,Due Date,Priority,Status,Assigned User';
  const rows = tasks.map(task => 
    `${task.title},${task.description},${task.dueDate},${task.priority},${task.status},${task.assignedUser}`
  );

  const csvData = [header, ...rows].join('\n');
  console.log('%cExported CSV Data:', 'color: purple; font-weight: bold;', csvData);
  
  return csvData;
};
