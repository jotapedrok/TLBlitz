import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './style.scss';

export default function AddBlockForm({ onSubmit, close }: any) {
  const [formFields, setFormFields] = useState({
    blockName: '',
    blockThumb: '',
  });

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <div className="add-block-form">
      <MdClose onClick={close} />
      <Form>
        <FormGroup className="mb-3" controlId="blockName">
          <FormLabel>Name</FormLabel>
          <FormControl
            onChange={handleChange}
            name="blockName"
            type="text"
            placeholder="Enter block name"
            value={formFields.blockName}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="blockThumb">
          <FormLabel>Thumbnail</FormLabel>
          <FormControl
            onChange={handleChange}
            name="blockThumb"
            value={formFields.blockThumb}
            type="text"
            placeholder="Enter image URL"
          />
          <FormText className="text-muted">Send a valid image url</FormText>
        </FormGroup>
        <Button
          type="submit"
          variant="secondary"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(formFields);
          }}
          onClick={e => {
            e.preventDefault();
            onSubmit(formFields);
          }}
        >
          Create Block
        </Button>
      </Form>
    </div>
  );
}
