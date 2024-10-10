import React from 'react';
import Card from './Card';
import Icon from '../utils/icon';
import '../styles/Column.css';

export default function Column({ name, tickets, groupBy }) {
  const getColumnIcon = () => {
    if (groupBy === 'priority') {
      switch (name.toLowerCase()) {
        case 'urgent': return 'urgent';
        case 'high': return 'high';
        case 'medium': return 'medium';
        case 'low': return 'low';
        case 'no priority': return 'no-priority';
        default: return 'no-priority';
      }
    } else if (groupBy === 'status') {
      switch (name.toLowerCase()) {
        case 'todo': return 'todo';
        case 'in progress': return 'in-progress';
        case 'done': return 'done';
        case 'cancelled': return 'cancelled';
        case 'backlog': return 'backlog';
        default: return 'backlog';
      }
    }
    return null;
  };

  const columnIcon = getColumnIcon();

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {columnIcon && <Icon name={columnIcon} className="column-icon" />}
          <h2>{name}</h2>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <button className="icon-button">
            <Icon name="add" className="add-icon" />
          </button>
          <button className="icon-button">
            <Icon name="more" className="more-icon" />
          </button>
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} groupBy={groupBy} />
        ))}
      </div>
    </div>
  );
}