const validate = (schema) => (input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, cur) => {
      acc[cur.context.key] = cur.message;
      return acc;
    }, {});
    return result;
  }
};

export default validate;
