import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList';
import { RootState } from '../../store';
import './style.scss';

export default function ListPage() {
  const block = useSelector((s: RootState) => s.block.block);
  return (
    <div className="list-page">
      <div className="list-page-header">
        <div className="list-page-hader-block-title">
          <h2>{block.name}</h2>
        </div>
        <div className="list-page-header-options">Options</div>
      </div>
      <div className="list-page-content">
        <div className="list-page-content-filter">Filter</div>
        <div className="list-page-content-list">
          <TaskList blockId={block.id} />
        </div>
      </div>
    </div>
  );
}
