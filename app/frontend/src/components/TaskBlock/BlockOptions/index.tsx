import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeAlert,
  desativeAlert,
  resetAlert,
  sendAlert,
} from '../../../store/alert.store';
import { IAlertProps } from '../../AlertBox';
import './style.scss';
import { deleteBlock } from '../../../http/block';
import { RootState } from '../../../store';

interface props {
  setOptionsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export default function BlockOptions({ setOptionsOpen, id }: props) {
  const stateAlert = useSelector((s: RootState) => s.alert.alert);
  const dispatch = useDispatch();

  const deleteClick = async () => {
    const response = await deleteBlock(id);
    dispatch(
      sendAlert({
        ...stateAlert,
        content: response.message ? response.message : response.error,
      }),
    );
    setTimeout(() => {
      dispatch(desativeAlert());
    }, 5000);
  };

  const onDelete = () => {
    const alert: IAlertProps = {
      title: 'Delete Block',
      content: 'Are you sure you want to delete this block?',
      hasButton: true,
      buttons: [
        {
          id: uuidv4(),
          text: 'Delete',
          variant: 'danger',
          onClick: deleteClick,
        },
        {
          id: uuidv4(),
          text: 'Cancel',
          variant: 'secundary',
          onClick: () => {
            dispatch(desativeAlert());
            dispatch(resetAlert());
          },
        },
      ],
    };
    dispatch(sendAlert(alert));
    dispatch(activeAlert());
    setOptionsOpen(false);
  };

  return (
    <div className="block-options">
      <button
        onClick={onDelete}
        type="button"
        className="block-options-delete btn"
      >
        Delete
      </button>
    </div>
  );
}
