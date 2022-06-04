import React from 'react';
import TaskList from '../../components/TaskList';
import './style.scss';

export default function ListPage() {
  return (
    <div className="list-page">
      <div className="list-page-header">
        <div className="list-page-hader-block-title">Title</div>
        <div className="list-page-header-options">Options</div>
      </div>
      <div className="list-page-content">
        <div className="list-page-content-filter">Filter</div>
        <div className="list-page-content-list">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
