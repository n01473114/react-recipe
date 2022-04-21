import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

function Category() {
  return (
    <List>
      <SLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem;
  text-decoration: none;
  background-image: linear-gradient(35deg, #494949, #333);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
  }

  svg {
    fill: #fff;
    font-size: 1.75rem;
  }

  &.active {
    background-image: linear-gradient(to right, #f27121, #e94057);
  }

  &:hover {
    background-image: linear-gradient(to right, gray, black);
  }
`;

export default Category;
