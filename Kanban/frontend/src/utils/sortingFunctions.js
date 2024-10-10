export const sortTickets = (tickets, sorting) => {
    switch (sorting) {
      case 'priority':
        return tickets.sort((a, b) => b.priority - a.priority);
      case 'title':
        return tickets.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return tickets;
    }
  };