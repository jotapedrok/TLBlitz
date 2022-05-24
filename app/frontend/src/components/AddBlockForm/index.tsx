import React from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from 'react-bootstrap';
import './style.scss';

export default function AddBlockForm({ onSubmit }: any) {
  return (
    <div className="add-block-form">
      <Form>
        <FormGroup className="mb-3" controlId="blockName">
          <FormLabel>Name</FormLabel>
          <FormControl type="text" placeholder="Enter block name" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="blockThumb">
          <FormLabel>Thumbnail</FormLabel>
          <FormControl type="text" placeholder="Enter image URL" />
          <FormText className="text-muted">Send a valid image url</FormText>
        </FormGroup>
        <Button type="submit" variant="secondary" onSubmit={onSubmit}>
          Create Block
        </Button>
      </Form>
    </div>
  );
}
