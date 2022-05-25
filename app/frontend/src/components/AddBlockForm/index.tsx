import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { IAddBlockFormFields } from '../../pages/Home';
import './style.scss';

interface props {
  onSubmit(formField: IAddBlockFormFields): void;
  close: MouseEventHandler;
}

interface Validate {
  blockName?: boolean;
  blockThumb?: boolean;
}

export default function AddBlockForm({ onSubmit, close }: props) {
  const [formFields, setFormFields] = useState({
    blockName: '',
    blockThumb: '',
  });
  const initialValidate: Validate = {
    blockName: undefined,
    blockThumb: undefined,
  };
  const [isInvalid, setIsInvalid] = useState(initialValidate);

  const testFields = (blockName: string, blockThumb: string) => {
    const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    setIsInvalid({
      blockName: blockName.length < 3,
      blockThumb: !urlRegex.test(blockThumb),
    });
    return blockName.length >= 3 && urlRegex.test(blockThumb);
  };

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
            isInvalid={isInvalid.blockName}
          />
          <FormControl.Feedback type="invalid">
            Minimum 3 characteres
          </FormControl.Feedback>
        </FormGroup>
        <FormGroup className="mb-3" controlId="blockThumb">
          <FormLabel>Thumbnail</FormLabel>
          <FormControl
            onChange={handleChange}
            name="blockThumb"
            value={formFields.blockThumb}
            type="text"
            placeholder="Enter image URL"
            isInvalid={isInvalid.blockThumb}
          />
          <FormControl.Feedback type="invalid">
            Invalid url
          </FormControl.Feedback>
          <FormText className="text-muted">Send a valid image url</FormText>
        </FormGroup>
        <Button
          type="submit"
          variant="secondary"
          onSubmit={e => {
            e.preventDefault();
            if (testFields(formFields.blockName, formFields.blockThumb)) {
              onSubmit(formFields);
            }
          }}
          onClick={e => {
            e.preventDefault();
            if (testFields(formFields.blockName, formFields.blockThumb)) {
              onSubmit(formFields);
            }
          }}
        >
          Create Block
        </Button>
      </Form>
    </div>
  );
}
