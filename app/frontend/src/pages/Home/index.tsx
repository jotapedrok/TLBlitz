import React, { MouseEvent, MouseEventHandler, useState } from 'react';
import { Button, FormControl, FormSelect, InputGroup } from 'react-bootstrap';
import { BiPlus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBlockForm from '../../components/AddBlockForm';
import { IAlertProps } from '../../components/AlertBox';
import TaskBlock from '../../components/TaskBlock';
import { createBlock } from '../../http/block';
import {
  activeAlert,
  desativeAlert,
  resetAlert,
  sendAlert,
} from '../../store/alert.store';
import './style.scss';

export interface IAddBlockFormFields {
  blockName: string;
  blockThumb: string;
}

export default function Home() {
  const [blockFormOpen, setBlockFormOpen] = useState(false);
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

  const toggleStateAddForm: MouseEventHandler = (e: MouseEvent) => {
    e.preventDefault();
    setBlockFormOpen(!blockFormOpen);
  };

  const submitBlock = async (formFields: IAddBlockFormFields) => {
    const { blockName, blockThumb } = formFields;
    const response = await createBlock({
      name: blockName,
      thumbnail: blockThumb,
    });
    if (response.error) {
      const alert: IAlertProps = {
        hasButton: true,
        title: 'Block not created',
        content: response.error,
        buttons: [
          {
            id: uuidv4(),
            text: 'Ok',
            variant: 'primary',
            onClick: e => {
              e.preventDefault();
              dispatch(desativeAlert());
              dispatch(resetAlert());
            },
          },
        ],
      };
      dispatch(sendAlert(alert));
      dispatch(activeAlert());
    } else {
      setBlockFormOpen(false);
      setSuccess('Block created!');
      setTimeout(() => {
        setSuccess('');
      }, 5000);
    }
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
        <p style={{ color: 'green' }}>{success}</p>
      </div>
    </div>
  );
}
