import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
