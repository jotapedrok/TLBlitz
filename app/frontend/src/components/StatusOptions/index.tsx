import React from "react";
import { Button } from "react-bootstrap";
import { IStatus } from "../../interfaces/IStatus.interface";
import "./style.scss";

interface props {
  status: IStatus[];
  selectStatus(status: IStatus): void;
}

export default function StatusOptions({ status, selectStatus }: props) {
  return (
    <div className="status-options">
      {status.map((s) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            selectStatus(s);
          }}
          key={`${s.id}_status_key`}
          className="status-options-btn"
          type="button"
        >
          {s.status}
        </Button>
      ))}
    </div>
  );
}
