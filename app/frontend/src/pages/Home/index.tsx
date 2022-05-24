import React, { MouseEvent, MouseEventHandler } from 'react';
import { Button, FormControl, FormSelect, InputGroup } from 'react-bootstrap';
import { BiPlus } from 'react-icons/bi';
import Header from '../../components/Header';
import TaskBlock from '../../components/TaskBlock';
import './style.scss';

export default function Home() {
  const createBlock: MouseEventHandler = (e: MouseEvent) => {
    e.preventDefault();
    console.log('click');
  };
  return (
    <div className="home-page">
      <Header />
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
          <Button type="button" onClick={createBlock}>
            <BiPlus />
          </Button>
        </div>
      </div>
    </div>
  );
}
