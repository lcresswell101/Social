import { Card } from "./Card";
import { Paragraph } from "../atoms";

export const NoResults = ({classes = "", content = ""}) => (
  <Card classes={`bg-red-800 ${classes}`}>
    <Paragraph classes={"text-white"} content={content} />
  </Card>
)