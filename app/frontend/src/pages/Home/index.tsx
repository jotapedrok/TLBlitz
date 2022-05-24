import React, { MouseEvent, MouseEventHandler, useState } from 'react';
import { Button, FormControl, FormSelect, InputGroup } from 'react-bootstrap';
import { BiPlus } from 'react-icons/bi';
import AddBlockForm from '../../components/AddBlockForm';
import TaskBlock from '../../components/TaskBlock';
import './style.scss';

export interface IAddBlockFormFields {
  blockName: string;
  blockThumb: string;
}

export default function Home() {
  const [blockFormOpen, setBlockFormOpen] = useState(false);

  const toggleStateAddForm: MouseEventHandler = (e: MouseEvent) => {
    e.preventDefault();
    setBlockFormOpen(!blockFormOpen);
  };

  const submitBlock = (formFields: IAddBlockFormFields) => {
    console.log(formFields);
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="title-one">
          <h4>Your Blocks:</h4>
        </div>
        <div className="filter-bar-container">
          <InputGroup className="mb-3">
            <FormControl
              aria-label="filter-by-name"
              placeholder="Filter Block Name"
            />
            <FormSelect>
              <option value="all">All</option>
              <option value="alone">Alone</option>
              <option value="group">Group</option>
            </FormSelect>
          </InputGroup>
        </div>
        <div className="block-list">
          <TaskBlock name="test" group={false} />
        </div>
        <div className="create-block-button-container">
          <Button type="button" onClick={toggleStateAddForm}>
            <BiPlus />
          </Button>
        </div>
        {blockFormOpen && (
          <AddBlockForm onSubmit={submitBlock} close={toggleStateAddForm} />
        )}
      </div>
    </div>
  );
}
