import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import EditTask from '../EditTask';
import { getStatus } from '../../http/status';
import './style.scss';

interface props {
  taskId: string;
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
  taskId,
  taskTitle,
  taskDescription,
  taskContent,
  createdBy,
  createdAt,
  fetchTasks,
}: props) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(['pendente', 'em andamento', 'pronto']);

  const fetchStatus = async () => {
    const response = await getStatus();
    if (!response.error) {
      setStatus(response);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const createdDate = moment(createdAt).format('DD/MM/yyyy');
  return (
    <div className="task">
      {editing && (
        <EditTask
          fetchTasks={fetchTasks}
          taskContent={taskContent}
          taskDescription={taskDescription}
          taskId={taskId}
          taskTitle={taskTitle}
          setEditing={setEditing}
        />
      )}
      <div className="task-header">
        <div className="task-header-title">{taskTitle}</div>
        <Button
          onClick={e => {
            e.preventDefault();
          }}
          type="button"
          variant="light"
          className="task-header-status"
        >
          {taskStatus}
        </Button>
      </div>
      <div className="task-description">{taskDescription}</div>
      <div className="task-options">
        <div className="taks-options-info">
          <p className="task-options-info-creator">{createdBy}</p>
          <p className="task-options-info-created-at">{createdDate}</p>
        </div>
        <div className="task-options-edit">
          <button
            onClick={e => {
              e.preventDefault();
              setEditing(true);
            }}
            type="button"
            className="btn task-options-edit-btn"
          >
            edit
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
