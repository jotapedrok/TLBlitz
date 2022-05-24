import React from 'react';
import { FormControl, FormSelect, InputGroup } from 'react-bootstrap';
import Header from '../../components/Header';
import TaskBlock from '../../components/TaskBlock';
import './style.scss';

export default function Home() {
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
      </div>
    </div>
  );
}
