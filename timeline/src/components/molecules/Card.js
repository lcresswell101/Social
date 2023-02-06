export const Card = ({ children = null, classes = ""}) => (
  <div className={`p-3 ${classes}`}>
    { children }
  </div>
)