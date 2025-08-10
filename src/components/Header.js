import React, { useState } from "react";
import styled from "styled-components";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars);
  // console.log(cars);

  return (
    <Container>
      <Link>
        <img src="/images/logo.svg" alt="tesla"></img>
      </Link>
      <Menu>

        {cars && cars.map((car, index) => (
            <Link key={index} href="#">{car}</Link>
          ))}
        {/* <a href="#">Model S </a>
        <a href="#">Model 3 </a>
        <a href="#">Model X </a>
        <a href="#">Model Y </a> */}
      </Menu>
      <RightMenu>
        <Link>Shop</Link>
        <Link>Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav $show={burgerStatus}>
        <CloseWrapper onClick={() => setBurgerStatus(false)}>
          <CustomClose />
        </CloseWrapper>

        {cars && cars.map((car, index) => (
          <li key={index}><Link>{car}</Link> </li>
        ))}
        <li>
          <Link>Existing Inventory</Link>
        </li>
        <li>
          <Link>Used Inventory</Link>
        </li>
        <li>
          <Link href="#">Trade-in</Link>
        </li>
        <li>
          <Link href="#">Cyburtruck</Link>
        </li>
        <li>
          <Link href="#">Roadstrar</Link>
        </li>
        <li>
          <Link href="#">Existing Inventory</Link>
        </li>
        <li>
          <Link href="#">Existing Inventory</Link>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-betweeen;
  z-index: 1;
  margin-top: 20px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;  
  gap: 10px;
  a{
    font-weight: 400;
    text-transform: uppercase;
    flex-wrap: nowrap;
    margin:5px 0;
    color: black;
  }

  a:hover{
    padding:5px 0;
    border-radius: 5px;
    background: grey;

  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-transform: uppercase;
    margin-right: 10px;
    color: black;
    font-weight: 400;
  }

  a:hover{
    background: grey;
    border-radius: 5px;
    padding: 5px 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.$show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
    a {
      color: black;
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
