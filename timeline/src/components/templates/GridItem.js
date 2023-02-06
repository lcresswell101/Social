export const GridItem = ({classes = "col-span-1", children = null}) => (
  <div className={`${classes}`}>
    {children}
  </div>
);