import React from 'react';
import Task from '../Task';
import './style.scss';

const content =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure illo assumenda consequuntur dicta ducimus amet vero voluptates nostrum! Iure dolorem unde natus! Nisi illo dolorum rerum tenetur voluptatum sunt ';

export default function TaskList() {
  return (
    <div className="TaskList">
      <Task
        taskStatus="coisado"
        taskTitle="Título 1"
        taskContent={content}
        taskDescription="Fazer a parada e tal, sas coisa toda..."
        createdAt={1653715538000}
        createdBy="Muá mesmo"
      />
      <Task
        taskStatus="descoisado"
        taskTitle="Título 2"
        taskContent={content}
        taskDescription="Fazer a parada e tal, sas coisa toda dnv..."
        createdAt={1653715538000}
        createdBy="Muá mesmo"
      />
    </div>
  );
}
