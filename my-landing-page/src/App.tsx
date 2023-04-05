import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #0077ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  padding: 1rem 2rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 2rem;
`;

function LandingPage() {
  return (
    <>
      <Navbar>
        <Logo>My Landing Page</Logo>
        <NavLinks>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">Contact</Link>
          </NavLink>
        </NavLinks>
      </Navbar>
      <Container>
        <Heading>Welcome to my landing page</Heading>
        <Button>Get Started</Button>
      </Container>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}





export default App;
