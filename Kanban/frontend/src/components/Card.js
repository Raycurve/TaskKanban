import React from 'react';
import Icon from '../utils/icon';
import '../styles/Card.css';

export default function Card({ ticket, groupBy }) {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return 'urgent';
      case 3: return 'high';
      case 2: return 'medium';
      case 1: return 'low';
      default: return 'no-priority';
    }
  };

  

  const getUserInitials = (name) => {
    if (typeof name !== 'string' || name.trim() === '') {
      return 'U';
    }
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== 'user' && (
          <div className="user-avatar">
            {getUserInitials(ticket.userName)}
          </div>
        )}
      </div>
      <div className="card-title">
        {groupBy !== 'status' && (
          <Icon name={ticket.status.toLowerCase().replace(' ', '-')} className="status-icon" />
        )}
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-footer">
        <Icon name={getPriorityIcon(ticket.priority)} className="priority-icon" />
        <div className="card-tags">
          {ticket.tag && ticket.tag.map((tag, index) => (
            <span key={index} className={`tag ${tag === 'Feature Request' ? 'feature-request' : ''}`}>
              <Icon name="feature-request" className="tag-icon" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}