import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getTasks } from '../../http/task';
import { ITask } from '../../interfaces/ITask.interface';
import { tasksMock } from '../../mocks/tasksMock';
import {
  activeAlert,
  desativeAlert,
  resetAlert,
  sendAlert,
} from '../../store/alert.store';
import { IAlertProps } from '../AlertBox';
import Task from '../Task';
import './style.scss';

interface props {
  blockId: string;
}

export default function TaskList({ blockId }: props) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const dispatch = useDispatch();
  const fetchTasks = async () => {
    // const response = await getTasks(blockId || '');
    const response = tasksMock;
    // if (response.error) {
    //   const alert: IAlertProps = {
    //     hasButton: true,
    //     title: 'Error on server',
    //     content: 'response.error',
    //     buttons: [
    //       {
    //         id: '7',
    //         text: 'Ok',
    //         variant: 'secondary',
    //         onClick: (e) => {
    //           e.preventDefault();
    //           dispatch(desativeAlert());
    //           dispatch(resetAlert());
    //         },
    //       },
    //     ],
    //   };
    //   dispatch(sendAlert(alert));
    //   dispatch(activeAlert());
    // } else {
    //   setTasks(response.data);
    // }
    setTasks(response);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="task-list">
      {tasks.map((task: ITask) => (
        <div key={task.id} className="task-container">
          <Task task={task} fetchTasks={fetchTasks} />
        </div>
      ))}
    </div>
  );
}
