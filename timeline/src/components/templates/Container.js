export const Container = ({classes = "", children = null}) => (
  <div className={`container mx-auto ${classes}`}>
    {children}
  </div>
)