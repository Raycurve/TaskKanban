import React, { useState, useEffect } from 'react';
import DisplayMenu from './DisplayMenu';
import Column from './Column';
import { groupTickets } from '../utils/groupingFunctions';
import { sortTickets } from '../utils/sortingFunctions';
import '../styles/KanbanBoard.css';

export default function KanbanBoard({ tickets, users }) {
  const [grouping, setGrouping] = useState(() => {
    const saved = localStorage.getItem('kanbanGrouping');
    return saved || 'status';
  });
  const [sorting, setSorting] = useState(() => {
    const saved = localStorage.getItem('kanbanSorting');
    return saved || 'priority';
  });
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const grouped = groupTickets(tickets, grouping, users);
    const sortedGrouped = Object.keys(grouped).reduce((acc, key) => {
      acc[key] = sortTickets(grouped[key], sorting);
      return acc;
    }, {});
    setGroupedTickets(sortedGrouped);

    localStorage.setItem('kanbanGrouping', grouping);
    localStorage.setItem('kanbanSorting', sorting);
  }, [tickets, users, grouping, sorting]);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  return (
    <div className="kanban-board">
      <DisplayMenu
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <div className="columns-container">
        {Object.entries(groupedTickets).map(([columnName, columnTickets]) => (
          <Column
            key={columnName}
            name={columnName}
            tickets={columnTickets}
            groupBy={grouping}
          />
        ))}
      </div>
    </div>
  );
}