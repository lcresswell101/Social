export const Grid = ({classes = "", children = null}) => (
  <div className={`grid ${classes}`}>
    {children}
  </div>
)