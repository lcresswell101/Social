export const Input = ({type, name, value, classes = "", handleChange = null}) => (
  <input type={type} name={name} value={value} className={`border border-solid p-3 mt-3 ${classes}`} onChange={handleChange}/>
);