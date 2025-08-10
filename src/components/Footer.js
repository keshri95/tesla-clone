import { Link } from "react-router";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <li>
        <Link to={`#`}>Tesla &copy; 2022</Link>
      </li>
      <li>
        <Link to={`#`}>Privacy & Legal</Link>
      </li>
      <li>
        <Link to={`#`}>Vehicle Recalls</Link>
      </li>
      <li>
        <Link to={`#`}>Contact</Link>
      </li>
      <li>
        <Link to={`#`}>Careers</Link>
      </li>
      <li>
        <Link to={`#`}>News</Link>
      </li>
      <li>
        <Link to={`#`}>Engage</Link>
      </li>
      <li>
        <Link to={`#`}>Locations</Link>
      </li>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  a {
    padding: 0 10px;
    color: grey;
  }
`;
