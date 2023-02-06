import { Navbar } from "./components/organisms/Navbar";
import { Error, Success } from "./components/molecules";
import { Container } from "./components/templates";
import { Button } from "./components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "./api/logout";
import { logOut } from "./store/user";
import { setMessage } from "./store/success";

export const App = ({children = null}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.user.user.isLoggedIn);
  const errors = useSelector((state) => state.errors.errors);
  const message = useSelector((state) => state.success.success.message);
  const user = useSelector((state) => state.user.user);

  const navbarItems = [
    {
      to: "/",
      text: "Home",
    },
  ];

  if (!isLoggedIn) {
    navbarItems.push(
      {
        to: "/login",
        text: "Login",
      },
      {
        to: "/register",
        text: "Register",
      }
    );
  } else {
    navbarItems.push({
      to: "/post/store",
      text: "Store Post",
    })
  }

  async function handleLogout() {
    await logout(user.token)
      .then(() => {
        dispatch(logOut());

        dispatch(setMessage("Successfully logged out"));

        navigate("/");
      })
  }

  return (
    <div>
      <Navbar classes={errors.length > 0 || message ? "" : "mb-3"}>
        {
          navbarItems.length > 0 && navbarItems.map((item, index) =>
            <NavLink key={index} to={item.to} className={"p-3 text-center text-white mr-3"}>
              {item.text}
            </NavLink>
          )
        }

        {
          isLoggedIn &&
          <Button text={"Log out"} classes={"bg-red-800 text-white"} type={"button"} onClick={handleLogout} />
        }
      </Navbar>

      <Error />
      <Success />

      <Container classes={"lg:max-w-screen-lg"}>
        {children}
      </Container>
    </div>
  )
};