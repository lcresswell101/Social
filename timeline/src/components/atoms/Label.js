export const Label = ({forLabel, label, classes = "", children = null}) => (
  <label htmlFor={forLabel} className={`flex flex-col mb-3 ${classes}`}>
    {label}

    {children}
  </label>
)