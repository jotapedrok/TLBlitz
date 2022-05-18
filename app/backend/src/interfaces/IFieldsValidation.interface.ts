export interface FieldValidationResponse {
  test: boolean;
  message?: string;
}

export interface IFieldsValidations {
  email(email?: string): FieldValidationResponse;
  password(password?: string): FieldValidationResponse;
  username(username?: string): FieldValidationResponse;
}