import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import { fetchData } from './utils/api';
// import './styles/App.css';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicketsAndUsers = async () => {
      try {
        const data = await fetchData();
        setTickets(data.tickets);
        setUsers(data.users);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchTicketsAndUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="app">
      <KanbanBoard tickets={tickets} users={users} />
    </div>
    <div>loaded</div>
    </>
  );
}