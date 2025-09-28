
const Validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.dob) {
    errors.dob = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  if (!values.employed) {
    errors.employed = "Required";
  }
  if (!values.bio) {
    errors.bio = "Required";
  }
  if (!values.photo) {
    errors.photo = "Required";
  }
  return errors;
}

export default Validate;