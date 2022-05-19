export interface FieldValidationResponse {
  test: boolean;
  message?: string;
}

export interface IFieldsValidations {
  email(email?: string): FieldValidationResponse;
  password(password?: string): FieldValidationResponse;
  username(username?: string): FieldValidationResponse;
  access(access?: string): FieldValidationResponse;
  name(name?: string): FieldValidationResponse;
  createdBy(createdBy?: string): FieldValidationResponse;
  thumbnail(thumbnail?: string): FieldValidationResponse;
}