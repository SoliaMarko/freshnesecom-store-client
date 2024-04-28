const errorMessagesGenerator = {
  generateNotEnoughMessage: (min: number): string => {
    return `This field must be at least ${min} characters long`;
  }
};

export const validationError = {
  REQUIRED: 'This field is required',
  MIN_LENGTH_2: errorMessagesGenerator.generateNotEnoughMessage(2),
  MIN_LENGTH_8: errorMessagesGenerator.generateNotEnoughMessage(8),
  INVALID_PASSWORD: 'For security reasons password must contain at least 8 characters: 2 lowercase, 2 uppercase, 2 numbers and 2 symbols',
  INVALID_PHONE_NUMBER: 'Phone number is invalid. Please make sure you provide country code (starting with +) and check if the number is correct',
  DONT_MATCH: 'Passwords must match'
};
