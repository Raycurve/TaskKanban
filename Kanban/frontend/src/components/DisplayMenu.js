import React, { useState } from 'react';
import Icon from '../utils/icon';
import '../styles/DisplayMenu.css';

export default function DisplayMenu({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="display-menu">
      <button onClick={toggleMenu} className="display-button">
        <Icon name="display" />
        Display
        <Icon name="down" />
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-item">
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-item">
            <label>Ordering</label>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}