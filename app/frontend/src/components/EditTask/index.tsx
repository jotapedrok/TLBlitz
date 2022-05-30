import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { editTask } from '../../http/task';
import './style.scss';

interface props {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskContent: string;
}

export default function EditTask({
  taskId,
  taskTitle,
  taskDescription,
  taskContent,
}: props) {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    content: '',
  });
  const [savedFields, setSavedFields] = useState({
    title: '',
    description: '',
    content: '',
  });

  useEffect(() => {
    setSavedFields({
      title: taskTitle,
      description: taskDescription,
      content: taskContent,
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const saveTask = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = await editTask(taskId, savedFields);
    if (response.error) {
      console.log('error');
    }
  };

  return (
    <div className="edit-task">
      <div className="edit-task-x-btn">x</div>
      <div className="edit-task-title-container">
        <div className="edit-task-title-container-title">
          {savedFields.title}
        </div>
        <div className="edit-task-title-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl
            value={inputValues.title}
            onChange={handleChange}
            name="title"
            placeholder="Task Title"
            aria-label="task-title"
            aria-describedby="basic-addon1"
          />
          <Button variant="light">x</Button>
          <Button
            variant="secundary"
            onClick={e => {
              e.preventDefault();
              setSavedFields({
                ...savedFields,
                title: inputValues.title,
              });
            }}
          >
            Save
          </Button>
        </InputGroup>
      </div>
      <div className="edit-task-description-container">
        <div className="edit-task-description-container-description">
          {savedFields.description}
        </div>
        <div className="edit-task-description-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl
            onChange={handleChange}
            value={inputValues.description}
            name="description"
            as="textarea"
            aria-label="description textarea"
          />
          <Button
            variant="secundary"
            onClick={e => {
              e.preventDefault();
              setSavedFields({
                ...savedFields,
                description: inputValues.description,
              });
            }}
          >
            Save
          </Button>
          <Button variant="light">x</Button>
        </InputGroup>
      </div>
      <div className="edit-task-content-container">
        <div className="edit-task-content-container-content">
          {savedFields.content}
        </div>
        <div className="edit-task-content-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl
            onChange={handleChange}
            value={inputValues.content}
            name="content"
            as="textarea"
            aria-label="content textarea"
          />
          <Button
            variant="secundary"
            onClick={e => {
              e.preventDefault();
              setSavedFields({
                ...savedFields,
                content: inputValues.content,
              });
            }}
          >
            Save
          </Button>
          <Button variant="light">x</Button>
        </InputGroup>
      </div>
      <div className="edit-task-footer">
        <Button
          onClick={saveTask}
          disabled={savedFields.title === ''}
          variant="secondary"
        >
          Save
        </Button>
      </div>
      <div className="bg" />
    </div>
  );
}
