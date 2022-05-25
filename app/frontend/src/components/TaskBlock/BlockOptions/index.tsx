import React, { Dispatch, SetStateAction } from 'react';
import './style.scss';

interface props {
  setOptionsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BlockOptions({ setOptionsOpen }: props) {
  return (
    <div className="block-options">
      <div className="block-options-delete">Delete</div>
      <div className="block-options-add-user">Add new user</div>
    </div>
  );
}
