export const errors = (error) => {
  let errors = error?.response?.data?.errors || error?.response?.data?.message;
  let errorsArray = [];

  if (errors) {
    if (Array.isArray(errors)) {
      for(let index in errors) {
        errorsArray.push(errors[index]);
      }
    } else {
      errorsArray.push(errors);
    }
  }

  return errorsArray;
}