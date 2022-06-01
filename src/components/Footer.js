import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <li>
        <a href="#">Tesla &copy; 2022</a>
      </li>
      <li>
        <a href="#">Privacy & Legal</a>
      </li>
      <li>
        <a href="#">Vehicle Recalls</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Engage</a>
      </li>
      <li>
        <a href="#">Locations</a>
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
