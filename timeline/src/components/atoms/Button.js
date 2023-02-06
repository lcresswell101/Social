export const Button = ({type = "button", text = "", classes = "", onClick = null}) => (
  <button type={type} className={`p-3 ${classes}`} onClick={onClick}>
    {text}
  </button>
)