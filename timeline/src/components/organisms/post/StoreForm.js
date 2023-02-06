import { useState } from "react";
import { Grid, GridItem } from "../../templates";
import { Button, Input, Label } from "../../atoms";
import { Form } from "../../molecules";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../api/post/store";
import { setMessage } from "../../../store/success";
import { useNavigate } from "react-router-dom";

export const StoreForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const user = useSelector((state) => state.user.user);

  function changeTitle(event) {
    setTitle(event.target.value);
  }

  function changeContent(event) {
    setContent(event.target.value);
  }

  async function handleStore() {
    await store(title, content, user.token)
      .then(() => {
        dispatch(setMessage("Post successfully created"));

        navigate("/");
      });
  }

  return (
    <Form submit={handleStore}>
      <Grid classes={"gap-3 grid-cols-2 grid-rows-2"}>
        <GridItem>
          <Label for={"title"} label={"Title"}>
            <Input type={"text"} name={"title"} value={title} handleChange={changeTitle} />
          </Label>
        </GridItem>

        <GridItem>
          <Label for={"content"} label={"Content"}>
            <Input type={"content"} name={"content"} value={content} handleChange={changeContent} />
          </Label>
        </GridItem>

        <GridItem classes={"col-span-2"}>
          <Button type={"submit"} text={"Submit"} classes={"bg-green-800 text-white"} />
        </GridItem>
      </Grid>
    </Form>
  )
}