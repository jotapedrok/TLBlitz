import React, { useState } from 'react';
import { ITask } from '../../interfaces/ITask.interface';
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

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="TaskList">
      {tasks.map((task: ITask) => (
        <Task
          taskStatus={task.status}
          taskTitle={task.title}
          taskContent={task.content}
          taskDescription={task.description}
          createdAt={task.criatedAt}
          createdBy={task.criatedBy}
        />
      ))}
    </div>
  );
}
