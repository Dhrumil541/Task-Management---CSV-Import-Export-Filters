export const exportTasksToCSV = (tasks) => {
  // Convert tasks into CSV format
  const csvRows = [
    ['Title', 'Description', 'Due Date', 'Priority', 'Status', 'Assigned User'], // Header row
    ...tasks.map(task => [
      `"${task.title}"`,
      `"${task.description}"`,
      `"${task.dueDate}"`,
      `"${task.priority}"`,
      `"${task.status}"`,
      `"${task.assignedUser}"`
    ])
  ];

  // Join each row into a string and combine them into a single CSV string
  const csvString = csvRows.map(row => row.join(',')).join('\n');

  console.log('%cExported CSV Data:', 'color: green; font-weight: bold;', csvString); // Logging for clarity
  return csvString; 
};
