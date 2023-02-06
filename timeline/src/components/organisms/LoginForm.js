import { useState } from "react";
import { Grid, GridItem } from "../templates";
import { Button, Input, Label } from "../atoms";
import { Form } from "../molecules";
import { login } from "../../api/login";
import { logIn } from "../../store/user";
import { setMessage } from "../../store/success";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    await login(email, password)
      .then((response) => {
        const data = response.data;

        dispatch(logIn(data));
        dispatch(setMessage("Successfully logged in"));

        navigate("/");
      });
  }

  return (
    <Form submit={handleLogin}>
      <Grid classes={"gap-3 grid-cols-2 grid-rows-2"}>
       <GridItem>
          <Label for={"email"} label={"Email"}>
            <Input type={"email"} name={"email"} value={email} handleChange={changeEmail} />
          </Label>
        </GridItem>

        <GridItem>
          <Label for={"password"} label={"Password"}>
            <Input type={"password"} name={"password"} value={password} handleChange={changePassword} />
          </Label>
        </GridItem>

        <GridItem classes={"col-span-2"}>
          <Button type={"submit"} text={"Submit"} classes={"bg-green-800 text-white"} />
        </GridItem>
      </Grid>
    </Form>
  )
};