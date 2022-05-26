import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdGroup, MdPerson } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ITaskBlockProps } from '../../interfaces/ITaskBlockProps.interface';
import './style.scss';
import BlockOptions from './BlockOptions';

export default function TaskBlock({
  thumb,
  id,
  name,
  group = false,
}: ITaskBlockProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  return (
    <div className="TaskBlock" style={{ width: 200, height: 200 }}>
      {optionsOpen && <BlockOptions id={id} setOptionsOpen={setOptionsOpen} />}
      <Card>
        <Card.Img
          variant="top"
          src={thumb || 'https://via.placeholder.com/200'}
        />
        <Card.ImgOverlay>
          <button
            onClick={e => {
              e.preventDefault();
              setOptionsOpen(!optionsOpen);
            }}
            className="btn"
            type="button"
          >
            <BsThreeDotsVertical />
          </button>
          <Card.Body style={{ display: 'flex' }}>
            <Card.Title>{name}</Card.Title>
            {group ? <MdGroup /> : <MdPerson />}
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
