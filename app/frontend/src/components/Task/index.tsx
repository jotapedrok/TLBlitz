import moment from 'moment';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import './style.scss';

interface props {
  taskTitle: string;
  taskStatus: string;
  taskContent: string;
  createdBy: string;
  createdAt: number;
  taskDescription: string;
  fetchTasks(): void;
}

export default function Task({
  taskStatus,
  taskTitle,
  taskDescription,
  taskContent,
  createdBy,
  createdAt,
  fetchTasks,
}: Partial<props>) {
  const [open, setOpen] = useState(false);
  const createdDate = moment(createdAt).format('DD/MM/yyyy');
  return (
    <div className="task">
      <div className="task-header">
        <div className="task-header-title">{taskTitle}</div>
        <div className="task-header-status">{taskStatus}</div>
      </div>
      <div className="task-description">{taskDescription}</div>
      <div className="task-options">
        <div className="taks-options-info">
          <p className="task-options-info-creator">{createdBy}</p>
          <p className="task-options-info-created-at">{createdDate}</p>
        </div>
        <div className="task-options-edit">
          <button type="button" className="btn task-options-edit-btn">
            edit
          </button>
          <button type="button" className="btn task-options-edit-status">
            Status
          </button>
          <button type="button" className="btn task-options-edit-task">
            Task
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          type="button"
          className="btn task-options-open-content"
        >
          open
        </button>
      </div>
      <Collapse in={open}>
        <div className="task-content">{taskContent}</div>
      </Collapse>
    </div>
  );
}
