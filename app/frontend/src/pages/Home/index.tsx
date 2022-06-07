import React, {
  MouseEvent, MouseEventHandler, useEffect, useState,
} from 'react';
import {
  Button, FormControl, FormSelect, InputGroup,
} from 'react-bootstrap';
import { BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddBlockForm from '../../components/AddBlockForm';
import { IAlertProps } from '../../components/AlertBox';
import TaskBlock from '../../components/TaskBlock';
import { createBlock, getBlocks } from '../../http/block';
import { IBlock } from '../../interfaces/IBlock.interface';
import { RootState } from '../../store';
import {
  activeAlert,
  desativeAlert,
  resetAlert,
  sendAlert,
} from '../../store/alert.store';
import { setBlock } from '../../store/block.store';
import './style.scss';

export interface IAddBlockFormFields {
  blockName: string;
  blockThumb: string;
}

export default function Home() {
  const [blockFormOpen, setBlockFormOpen] = useState(false);
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((s: RootState) => s.user.user);

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
            onClick: (e) => {
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

  const fetchBlocks = async () => {
    const response = await getBlocks(user.id);
    if (response.error) {
      const alert: IAlertProps = {
        hasButton: true,
        title: 'Error on server',
        content: 'response.error',
        buttons: [
          {
            id: uuidv4(),
            text: 'Ok',
            variant: 'secondary',
            onClick: (e) => {
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
      setBlocks(response.data);
    }
  };

  const onClickBlock = (block: IBlock) => {
    dispatch(setBlock(block));
    navigate('/list');
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

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
          {blocks.map((b) => (
            <Button
              onClick={(e) => {
                e.preventDefault();
                onClickBlock(b);
              }}
              type="button"
              variant="light"
            >
              <TaskBlock id={b.id} name={b.name} thumb={b.thumbnail} group={b.group} />
            </Button>
          ))}
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
