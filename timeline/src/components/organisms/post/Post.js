import { Card } from "../../molecules";
import { Title, Paragraph } from "../../atoms";

export const Post = ({ title = "", content = "", createdAt = "", userName = "" }) => {

  return (
    <Card classes={"bg-gray-100  mb-3"}>
      <Title title={title} />

      <Paragraph classes={"mb-3"} content={content} />

      <div className="flex justify-between">
        <Paragraph classes={"text-sm text-gray-400"} content={userName} />

        <Paragraph classes={"text-sm text-gray-400"} content={createdAt} />
      </div>
    </Card>
  )
}