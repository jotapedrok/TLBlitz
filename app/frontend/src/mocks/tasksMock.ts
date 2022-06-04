import moment from 'moment';
import { ITask } from '../interfaces/ITask.interface';

const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt ';

export const tasksMock: ITask[] = [
  {
    id: '1',
    title: 'taks 1',
    status: 'Pendente',
    description: 'decrição task 1',
    content,
    criatedAt: moment().valueOf(),
    criatedBy: 'Jota Aguiar',
  }, {
    id: '2',
    title: 'taks 2',
    status: 'Pendente',
    description: 'decrição task 2',
    content,
    criatedAt: moment().valueOf(),
    criatedBy: 'Jota Aguiar',
  },
  {
    id: '3',
    title: 'taks 3',
    status: 'Pendente',
    description: 'decrição task 3',
    content,
    criatedAt: moment().valueOf(),
    criatedBy: 'Jota Aguiar',
  },
  {
    id: '4',
    title: 'taks 4',
    status: 'Pendente',
    description: 'decrição task 4',
    content,
    criatedAt: moment().valueOf(),
    criatedBy: 'Jota Aguiar',
  },
  {
    id: '5',
    title: 'taks 5',
    status: 'Pendente',
    description: 'decrição task 5',
    content,
    criatedAt: moment().valueOf(),
    criatedBy: 'Jota Aguiar',
  },
];
