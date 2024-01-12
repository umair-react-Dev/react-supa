export const countrySchema = {
  required: "country name is required",
  minLength: {
    value: 3,
    message: "Please enter a minimum of 3 characters",
  },
};
