import React from 'react';
import { Button } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './style.scss';

interface props {
  hasButton: boolean;
  buttons: {
    i: number;
    text: string;
    onClick(): void;
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
}: props) {
  return (
    <div className="alert-box">
      <div className="alert-box-header">
        <h5 className="alert-box-header-title">{title}</h5>
        {!hasButton && (
          <div className="alert-box-header-close">
            <MdClose />
          </div>
        )}
      </div>
      <hr className="line" />
      <div className="content-container">
        <p>{content}</p>
      </div>
      {hasButton && (
        <>
          <hr />
          <div className="buttons-conteiner">
            {buttons.map(button => (
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
        </>
      )}
    </div>
  );
}
