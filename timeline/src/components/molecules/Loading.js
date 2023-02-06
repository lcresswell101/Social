import { Paragraph } from "../atoms";
import { Card } from "./Card";

export const Loading = ({classes = "", content = ""}) => (
  <Card classes={`bg-gray-800 ${classes}`}>
    <Paragraph classes={"text-white"} content={content} />
  </Card>
)