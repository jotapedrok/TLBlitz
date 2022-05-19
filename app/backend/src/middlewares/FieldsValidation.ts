import { FieldValidationResponse, IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

class FieldsValidation implements IFieldsValidations {
  email(email?: string): FieldValidationResponse {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || email === '') {
      return { test: false, message: 'Email is required' };
    }
    if (!regex.test(email)) {
      return { test: false, message: 'Invalid email format' };
    }
    return { test: true };
  };

  password(password?: string): FieldValidationResponse {
    if (!password || password === '') {
      return { test: false, message: 'Password is required' };
    }
    if (password.length < 6) {
      return { test: false, message: 'Password minimum length is 6 characters' };
    }
    return { test: true };
  };

  username(username?: string): FieldValidationResponse {
    if (!username || username === '') {
      return { test: false, message: 'Username is required' };
    }
    if (username.length < 3) {
      return { test: false, message: 'Username minimum length is 3 characters' };
    }
    return { test: true };
  };

  access(access?: string): FieldValidationResponse {
    if (!access || access === '') return { test: false, message: 'Access is required' };
    const levels = ["viewer", "editor"];
    const testLevel = levels.find((e) => e === access);
    if (!testLevel) return {
      test: false,
      message: 'Access needs to be equal "viewer" or "editor"',
    };
    return { test: true };
  };

  name(name?: string): FieldValidationResponse {
    if (!name || name === '') return { test: false, message: 'Name is required' };
    if (name.length < 3) {
      return { test: false, message: 'Name minimum length is 3 characters' };
    }
    return { test: true };
  };

  createdBy(createdBy?: string): FieldValidationResponse {
    if (!createdBy || createdBy === '') return { test: false, message: 'CreatedBy is required' };
    if (createdBy.length !== 36) {
      return { test: false, message: 'CreatedBy should be UUIDV4' };
    }
    return { test: true };
  };

  thumbnail(thumbnail?: string): FieldValidationResponse {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gmi;
    if (thumbnail && !regex.test(thumbnail)) {
      return { test: false, message: 'Thumbnail needs to be a URL' };
    }
    return { test: true };
  };

  title(title?: string): FieldValidationResponse {
    if (!title || title === '') {
      return { test: false, message: 'Title is required' };
    }
    if (title.length < 2) {
      return { test: false, message: 'Title minimum length is 2 characters' };
    }
    return { test: true };
  };

  content(content?: string): FieldValidationResponse {
    if (content && content.length < 3) {
      return { test: false, message: 'Content minimum length is 3 characters' };
    }
    return { test: true };
  };

  description(description?: string): FieldValidationResponse {
    if (description && description.length < 4) {
      return { test: false, message: 'Content minimum length is 4 characters' };
    }
    return { test: true };
  };

  statusId(statusId?: string): FieldValidationResponse {
    if (!statusId || statusId === '') {
      return { test: false, message: 'StatusId is required' };
    }
    if (statusId.length !== 36) {
      return { test: false, message: 'StatusId should be UUIDV4' };
    }
    return { test: true };
  };

  blockId(blockId?: string): FieldValidationResponse {
    if (!blockId || blockId === '') {
      return { test: false, message: 'BlockId is required' };
    }
    if (blockId.length !== 36) {
      return { test: false, message: 'BlockId should be UUIDV4' };
    }
    return { test: true };
  };

  priority(priority?: number): FieldValidationResponse {
    if (priority === null || priority === undefined) {
      return { test: false, message: 'Priority is required' };
    }
    if (priority < 1) {
      return { test: false, message: 'Priority should be greater then 0' };
    }
    return { test: true };
  }
}

export default new FieldsValidation();