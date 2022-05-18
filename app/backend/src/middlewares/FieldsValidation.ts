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
    return { test: true }
  };

  password(password?: string): FieldValidationResponse {
    if (!password || password === '') {
      return { test: false, message: 'Password is required' };
    }
    if (password.length < 6) {
      return { test: false, message: 'Password minimum length is 6 characters' };
    }
    return { test: true }
  };

  username(username?: string): FieldValidationResponse {
    if (!username || username === '') {
      return { test: false, message: 'Username is required' };
    }
    if (username.length < 3) {
      return { test: false, message: 'Username minimum length is 3 characters' };
    }
    return { test: true }
  }
}

export default new FieldsValidation();