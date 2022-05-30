import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './style.scss';

export default function EditTask() {
  return (
    <div className="edit-task">
      <div className="edit-task-x-btn">x</div>
      <div className="edit-task-title-container">
        <div className="edit-task-title-container-title">Title</div>
        <div className="edit-task-title-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl
            placeholder="Task Title"
            aria-label="task-title"
            aria-describedby="basic-addon1"
          />
          <Button variant="light">x</Button>
          <InputGroup.Text id="basic-addon1">Save Icon</InputGroup.Text>
        </InputGroup>
      </div>
      <div className="edit-task-description-container">
        <div className="edit-task-description-container-description">
          Description
        </div>
        <div className="edit-task-description-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl as="textarea" aria-label="description textarea" />
          <InputGroup.Text id="basic-addon1">Save Icon</InputGroup.Text>
          <Button variant="light">x</Button>
        </InputGroup>
      </div>
      <div className="edit-task-content-container">
        <div className="edit-task-content-container-content">Content</div>
        <div className="edit-task-content-container-pen-btn">pen</div>
        <InputGroup>
          <FormControl as="textarea" aria-label="content textarea" />
          <InputGroup.Text id="basic-addon1">Save Icon</InputGroup.Text>
          <Button variant="light">x</Button>
        </InputGroup>
      </div>
    </div>
  );
}
