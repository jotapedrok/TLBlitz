import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../http/task';
import { activeAlert, sendAlert } from '../../store/alert.store';
import { IAlertProps } from '../AlertBox';
import './style.scss';

interface props {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskContent: string;
  fetchTasks(): void;
  setEditing(bool: boolean): void;
}

export default function EditTask({
  taskId,
  taskTitle,
  taskDescription,
  taskContent,
  fetchTasks,
  setEditing,
}: props) {
  const [feedback, setFeedback] = useState('');
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

  const dispatch = useDispatch();

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
      const alert: Partial<IAlertProps> = {
        title: 'Error on edit:',
        content: response.error,
        hasButton: false,
      };
      dispatch(sendAlert(alert));
      dispatch(activeAlert());
    } else {
      setFeedback('Task Saved!');
      setTimeout(() => {
        setFeedback('');
      }, 5000);
      fetchTasks();
    }
  };

  return (
    <div className="edit-task">
      <div className="edit-task-x-btn">
        <Button
          onClick={e => {
            e.preventDefault();
            fetchTasks();
            setEditing(false);
          }}
          variant="outline-secundary"
        >
          X
        </Button>
      </div>
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
        <div className="edit-task-footer-feedback">
          <p className="feedback" style={{ color: 'green' }}>
            {feedback}
          </p>
        </div>
      </div>
      <div className="bg" />
    </div>
  );
}
