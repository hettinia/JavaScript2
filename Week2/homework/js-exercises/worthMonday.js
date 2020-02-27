const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

// take out the duration time for each task and calculate each task rate
const tasksRates = mondayTasks.map(e => e.duration / 60 * 25);

// calculate the total tasks rates
const totalRates = tasksRates.reduce((total, taskCost) => total + taskCost, 0);

// log the Monday amount in Euro
console.log('€' + totalRates);