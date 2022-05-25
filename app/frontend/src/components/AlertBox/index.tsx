import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './style.scss';

export interface IAlertProps {
  hasButton: boolean;
  buttons: {
    id: string;
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    variant: string;
  }[];
  content: string;
  title: string;
}

export default function AlertBox({
  hasButton,
  buttons,
  content,
  title,
}: Partial<IAlertProps>) {
  return (
    <div className="alert-box">
      <div className="alert-box-content">
        <div className="alert-box-content-header">
          <h5 className="alert-box-content-header-title">{title}</h5>
          {!hasButton && (
            <div className="alert-box-content-header-close">
              <MdClose />
            </div>
          )}
          <div className="line" />
        </div>
        <div className="content-container">
          <p>{content}</p>
        </div>
        <div className="buttons-conteiner">
          {hasButton &&
            buttons &&
            buttons.map(button => (
              <Button
                type="button"
                key={`${button.id}_btn`}
                onClick={button.onClick}
                variant={button.variant}
              >
                {button.text}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}
