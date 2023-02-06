import { Container } from "../templates";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../store/errors";

export const Error = ({children = null, classes = ""}) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.errors);
  const hasErrors = errors.length > 0;

  const handleClearErrors = () => {
    return setTimeout(() => {
      dispatch(clearErrors());
    }, 5000)
  };

  if (hasErrors) {
    handleClearErrors();
  }

  if (hasErrors) {
    return (
      <div className={`bg-red-800 text-white p-3 mb-3 ${classes}`}>
        <Container>
          <ul>
            {
              errors.map((error, index) => (
                <li key={index}>
                  {error}
                </li>
              ))
            }
          </ul>
        </Container>
      </div>
    );
  }
};