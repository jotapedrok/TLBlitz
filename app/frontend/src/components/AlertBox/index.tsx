import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './style.scss';

export interface AlertProps {
  hasButton: boolean;
  buttons: {
    i: number;
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
}: Partial<AlertProps>) {
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
                key={`${button.i}_btn_key_define`}
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
