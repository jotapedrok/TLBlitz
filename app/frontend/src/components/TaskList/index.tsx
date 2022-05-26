import React from 'react';
import Task from '../Task';
import './style.scss';

export default function TaskList() {
  return (
    <div className="TaskList">
      <Task />
      <Task />
    </div>
  );
}
