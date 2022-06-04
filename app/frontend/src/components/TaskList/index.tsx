import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from '../../http/task';
import { ITask } from '../../interfaces/ITask.interface';
import {
  activeAlert,
  desativeAlert,
  resetAlert,
  sendAlert,
} from '../../store/alert.store';
import { IAlertProps } from '../AlertBox';
import Task from '../Task';
import './style.scss';

const content =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt ';

const initialTasks: ITask[] = [
  {
    title: 'Title 1',
    content,
    description: 'qualquer descri',
    criatedAt: 1653715538000,
    criatedBy: 'Yo Miesmo',
    status: 'coisado',
  },
  {
    title: 'Title 2',
    content,
    description: 'qualquer descri 2',
    criatedAt: 1653715538000,
    criatedBy: 'Yo Miesmo again',
    status: 'descoisado',
  },
];

interface props {
  blockId: string;
}

export default function TaskList({ blockId }: Partial<props>) {
  const [tasks, setTasks] = useState(initialTasks);
  const dispatch = useDispatch();
  const fetchTasks = async () => {
    const response = await getTasks(blockId || '');
    if (response.error) {
      const alert: IAlertProps = {
        hasButton: true,
        title: 'Error on server',
        content: response.error,
        buttons: [
          {
            id: '7',
            text: 'Ok',
            variant: 'secondary',
            onClick: e => {
              e.preventDefault();
              dispatch(desativeAlert());
              dispatch(resetAlert());
            },
          },
        ],
      };
      dispatch(sendAlert(alert));
      dispatch(activeAlert());
    } else {
      setTasks(response.data);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="TaskList">
      {tasks.map((task: ITask) => (
        <Task
          taskId={task.id || ''}
          taskStatus={task.status}
          taskTitle={task.title}
          taskContent={task.content}
          taskDescription={task.description}
          createdAt={task.criatedAt}
          createdBy={task.criatedBy}
          fetchTasks={fetchTasks}
        />
      ))}
    </div>
  );
}
