export const groupTickets = (tickets, grouping, users) => {
  switch (grouping) {
    case 'status':
      return groupByStatus(tickets);
    case 'user':
      return groupByUser(tickets, users);
    case 'priority':
      return groupByPriority(tickets);
    default:
      return groupByStatus(tickets);
  }
};

const groupByStatus = (tickets) => {
  const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
  const grouped = statuses.reduce((acc, status) => {
    acc[status] = [];
    return acc;
  }, {});

  tickets.forEach(ticket => {
    if (grouped[ticket.status]) {
      grouped[ticket.status].push(ticket);
    }
  });

  return grouped;
};

const groupByUser = (tickets, users) => {
  const grouped = users.reduce((acc, user) => {
    acc[user.name] = [];
    return acc;
  }, {});

  tickets.forEach(ticket => {
    const user = users.find(u => u.id === ticket.userId);
    if (user) {
      grouped[user.name].push(ticket);
    }
  });

  return grouped;
};

const groupByPriority = (tickets) => {
  const priorities = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };

  const grouped = Object.values(priorities).reduce((acc, priority) => {
    acc[priority] = [];
    return acc;
  }, {});

  tickets.forEach(ticket => {
    const priorityName = priorities[ticket.priority];
    if (priorityName) {
      grouped[priorityName].push(ticket);
    }
  });

  return grouped;
};