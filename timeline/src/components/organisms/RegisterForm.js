import { Grid, GridItem } from "../templates"
import { Form } from "../molecules";
import { Input, Label, Button } from "../atoms";
import { useState } from "react";
import { register } from "../../api/register";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/user";
import { setMessage } from "../../store/success";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    return await register(name, email, password)
      .then((response) => {
        const data = response.data;

        dispatch(logIn(data));
        dispatch(setMessage("Successfully logged in"));

        navigate("/");
      });
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <Form submit={handleRegister}>
      <Grid classes={"gap-3 grid-cols-2 grid-rows-2"}>
        <GridItem>
          <Label for={"name"} label={"Name"}>
            <Input type={"text"} name={"name"} value={name} handleChange={changeName} />
          </Label>
        </GridItem>

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