export const Title = ({title = "", classes = ""}) => (
  <h2 className={`text-2xl mb-3 ${classes}`}>
    { title }
  </h2>
)