import React from 'react';
import { Card } from 'react-bootstrap';
import { MdGroup, MdPerson } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ITaskBlockProps } from '../../interfaces/ITaskBlockProps.interface';
import './style.scss';

export default function TaskBlock({
  thumb,
  name,
  group = false,
}: ITaskBlockProps) {
  return (
    <div className="TaskBlock" style={{ width: 200, height: 200 }}>
      <Card>
        <Card.Img
          variant="top"
          src={thumb || 'https://via.placeholder.com/200'}
        />
        <Card.ImgOverlay>
          <BsThreeDotsVertical />
          <Card.Body style={{ display: 'flex' }}>
            <Card.Title>{name}</Card.Title>
            {group ? <MdGroup /> : <MdPerson />}
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
