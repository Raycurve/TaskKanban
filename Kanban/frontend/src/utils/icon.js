import React from 'react';

const iconMap = {
  'urgent': '/images/SVG - Urgent Priority colour.svg',
  'high': '/images/Img - High Priority.svg',
  'medium': '/images/Img - Medium Priority.svg',
  'low': '/images/Img - Low Priority.svg',
  'no-priority': '/images/No-priority.svg',
  'todo': '/images/To-do.svg',
  'in-progress': '/images/in-progress.svg',
  'done': '/images/Done.svg',
  'cancelled': '/images/Cancelled.svg',
  'backlog': '/images/Backlog.svg',
  'add': '/images/add.svg',
  'more': '/images/3 dot menu.svg',
  'down': '/images/down.svg',
  'display': '/images/Display.svg'
};

export default function Icon({ name, ...props }) {
  const src = iconMap[name.toLowerCase()];
  if (!src) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <img src={src} alt={name} {...props} />;
}