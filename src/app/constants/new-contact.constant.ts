export const validatorsValues = {
  name: {
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    required: true,
    pattern: '[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}',
  },
  phone: {
    required: false,
    minLength: 12,
    maxLength: 12,
  },
};
