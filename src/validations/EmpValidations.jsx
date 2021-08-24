const EmpValidations = (values) => {
  const errors = [];

  if (!values.name || values.name === "") {
    errors.name = "Please fill this field!";
  }
  if (!values.email || values.email === "") {
    errors.email = "Please fill this field!";
  }
  if (!values.phone || values.phone === "") {
    errors.phone = "Please fill this field!";
  }
  if (!values.address || values.address === "") {
    errors.address = "Please fill this field!";
  }

  return errors;
};

export default EmpValidations;
