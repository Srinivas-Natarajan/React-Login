export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  } else if(!/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
    errors.password = 'Password must consist of Alphanumeric characters';
  }
  
  return errors;
}
