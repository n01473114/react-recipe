import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { SiCodechef } from "react-icons/si"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to="/">
            <SiCodechef /> Jomit
          </Logo>
        </Nav>
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: bold;
display: flex;
align-items: center;
`

const Nav = styled.div`
padding: 2rem 0;
display: flex;
justify-content: center;
align-items: center;

svg {
  font-size: 2rem;
  margin-right: 0.5rem;
}
`

export default App;
