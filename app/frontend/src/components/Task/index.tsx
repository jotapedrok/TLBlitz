import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import EditTask from '../EditTask';
// import { changeStatus, getStatus } from '../../http/status';
import './style.scss';
import { ITask } from '../../interfaces/ITask.interface';
import { IStatus } from '../../interfaces/IStatus.interface';
import StatusOptions from '../StatusOptions';

interface props {
  task: ITask;
  fetchTasks(): void;
}

export default function Task({ task: recivedTask, fetchTasks }: props) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingStatus, setEditingStatus] = useState(false);
  const [task, setTask] = useState<ITask>({
    title: '',
    content: '',
    description: '',
    criatedBy: '',
    status: 'Pendente',
    criatedAt: Number(moment().valueOf()),
  });
  const [status, setStatus] = useState<IStatus[]>([
    { status: 'Pendente', id: '1' },
    { status: 'Em Andamento', id: '2' },
    { status: 'Pronto', id: '3' },
  ]);

  const fetchStatus = async () => {
    // const response = await getStatus();
    const response = [{ status: 'Pendente', id: '1' },
      { status: 'Em Andamento', id: '2' },
      { status: 'Pronto', id: '3' }];
    // if (!response.error) {
    //
    // }
    setStatus(response);
  };

  const selectStatus = async ({
    status: recivdStatus,
    // id: statusId,
  }: IStatus) => {
    setTask({
      ...task,
      status: recivdStatus,
    });
    // await changeStatus(statusId);
    setEditingStatus(false);
  };

  useEffect(() => {
    fetchStatus();
    if (recivedTask) {
      setTask(recivedTask);
    }
  }, []);

  const createdDate = moment(task.criatedAt).format('DD/MM/yyyy');
  return (
    <div className="task">
      {editing && (
        <EditTask
          fetchTasks={fetchTasks}
          taskContent={task.content}
          taskDescription={task.description}
          taskId={task.id || ''}
          taskTitle={task.title}
          setEditing={setEditing}
        />
      )}
      <div className="task-header">
        <div className="task-header-title">{task.title}</div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setEditingStatus(true);
          }}
          type="button"
          variant="light"
          className="task-header-status"
        >
          {task.status}
        </Button>
        {editingStatus && (
          <StatusOptions status={status} selectStatus={selectStatus} />
        )}
      </div>
      <div className="task-description">{task.description}</div>
      <div className="task-options">
        <div className="taks-options-info">
          <p className="task-options-info-creator">{task.criatedBy}</p>
          <p className="task-options-info-created-at">{createdDate}</p>
        </div>
        <div className="task-options-edit">
          <button
            onClick={(e) => {
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
        <div className="task-content">{task.content}</div>
      </Collapse>
    </div>
  );
}
