import { Container } from "../templates";

export const Navbar = ({children = null, classes = ""}) => (
  <nav className={`bg-gray-800 p-3 ${classes}`}>
    <Container>
      {children}
    </Container>
  </nav>
);