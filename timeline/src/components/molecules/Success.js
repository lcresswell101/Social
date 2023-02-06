import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../store/success";

export const Success = ({children = null, classes = ""}) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.success.success.message);

  const handleClearMessage = () => {
    return setTimeout(() => {
      dispatch(clearMessage());
    }, 1000)
  };

  if (message) {
    handleClearMessage();
  }

  if (message) {
    return (
      <div className={`bg-green-800 text-white p-3 mb-3 ${classes}`}>
        <p>
          {message}
        </p>
      </div>
    );
  }
};