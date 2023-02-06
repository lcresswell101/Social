import { setErrors } from "../../store/errors";
import { useDispatch } from "react-redux";
import { errors } from "../../helpers/errors";

export const Form = ({submit, children}) => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    submit()
      .catch((error) => {
        dispatch(setErrors(errors(error)));
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
};