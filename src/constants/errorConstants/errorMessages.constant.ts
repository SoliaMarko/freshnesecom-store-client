import {MIN_PASSWORD_LENGTH, MIN_TEXT_LENGTH} from '../validationConstants/validation.constant';

const errorMessagesGenerator = {
  generateNotEnoughMessage: (min: number): string => {
    return `This field must be at least ${min} characters long`;
  }
};

export const validationError = {
  REQUIRED: 'This field is required',
  MIN_TEXT_LENGTH: errorMessagesGenerator.generateNotEnoughMessage(MIN_TEXT_LENGTH),
  MIN_PASSWORD_LENGTH: errorMessagesGenerator.generateNotEnoughMessage(MIN_PASSWORD_LENGTH),
  INVALID_PASSWORD: 'For security reasons password must contain at least 8 characters: 2 lowercase, 2 uppercase, 2 numbers and 2 symbols',
  INVALID_PHONE_NUMBER: 'Phone number is invalid. Please make sure you provide country code (starting with +) and check if the number is correct',
  DONT_MATCH: 'Passwords must match'
};
