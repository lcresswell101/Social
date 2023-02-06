export const Paragraph = ({ classes = "", content = "" }) => (
  <p className={` ${classes}`}>
    { content }
  </p>
)