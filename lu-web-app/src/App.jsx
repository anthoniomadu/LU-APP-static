import React, { Suspense } from 'react';
import Home from './components/home';
import logo from './lu-logo.png';
import profileicon from './Asset1.png';
import './App.css'
import posts from './components/blogcomponents/blogpost';
import forum from './components/forumcomponents/forum';
import PlansList from './components/planscomponents/Plans';
import loginPage from './components/logincomponents/login';


// import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
// eslint-disable-next-line
import { Jumbotron, Nav, Container, Navbar, Row, Col} from 'react-bootstrap';

// import { render } from '@testing-library/react';

//import InventoryManager from './components/InventoryManager-with-useReducer';
//let us lazily import inventory manager so that it does not slow down startup of page
// const BlogManager = React.lazy(() => import('./components/blogcomponents/BlogManager-with-useReducer'));
// const ForumManager = React.lazy(() => import('./components/forumcomponents/ForumManager-with-useReducer'));


const App = () => {
  return (
    <Container>
    <Container fluid className='w-100 p-0'> {/**Topmost container set to fluid to get from end to end of page */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar variant="light"  >
            <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                  <Col></Col>
                  <Nav className="justify-content-end">
                    {/* <NavLink activeClassName='is-active' to='/visitors' >
                      <Nav.Item>
                        <Nav.Link href='/visitors'>Visitors</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    <NavLink activeClassName='is-active' to='/'>
                      <Nav.Item>
                        <Nav.Link href='/'><img src={profileicon} alt='profileicon' className='profileicon'/></Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/login'>
                      <Nav.Item>
                        <Nav.Link href='/login'>login</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    {/* <Nav.Item>
                      <Form action='/search' inline className="justify-content-end">
                        <ButtonGroup className='ml-2 border rounded'>
                          <FormControl size="sm" type="text" placeholder="Search" />
                          <Button size="sm" variant='outline-light' type="submit">Submit</Button>
                        </ButtonGroup>
                      </Form>
                    </Nav.Item> */}
                  </Nav>
            </Container>
          </Navbar>
          <Navbar variant="light" className="navline">
            <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                <Navbar.Brand href="/"><img src={logo} alt='company-logo' className='App-logo'/></Navbar.Brand>
                <Navbar className='navbar-text'>
                  Linden Ustawi
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                <Navbar.Collapse id="responsive-navbar-nav" > 
                <Col></Col>
                <Nav expand-lg>
                    <NavLink activeClassName='is-active' to='/' >
                      <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/plans'>
                      <Nav.Item>
                        <Nav.Link href='/plans'>Plans and Pricings</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/posts'>
                      <Nav.Item>
                        <Nav.Link href='/posts'>Blog</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    {/* <NavLink activeClassName='is-active' to='/blogmanager'>
                      <Nav.Item>
                        <Nav.Link href='/blogManager'>BlogManager</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    <NavLink activeClassName='is-active' to='/forum'>
                      <Nav.Item>
                        <Nav.Link href='/forum'>Forum</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    {/* <NavLink activeClassName='is-active' to='/forummanager'>
                      <Nav.Item>
                        <Nav.Link href='/forummanager'>ForumManager</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    <NavLink activeClassName='is-active' to='/'>
                      <Nav.Item>
                        <Nav.Link href='/'>Aboutus</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            {/** Below is for routing to blog Manager */}
            {/* <Route exact={true} path="/blogmanager" component={BlogManager} /> */}
            {/** Below is for routing to forum Manager */}
            {/* <Route exact={true} path="/forummanager" component={ForumManager} /> */}
            <Route exact={true} path="/forum" component={forum} />
            <Route exact={true} path="/plans" component={PlansList} />
            <Route exact={true} path="/posts" component={posts} />
            <Route exact={true} path="/login" component={loginPage} />
            {/** Below is for routing URL that matches the path patter /hello/:variable */}
            {/* <Route path="/hello/:name" render={({match}) => {
              return (
                    <Jumbotron>
                      <Container>
                        <Row>
                          <h3 className="display-3">Hello {match.params.name}!</h3>
                        </Row>
                      </Container>
                    </Jumbotron>
                  );
              }}
            /> */}
            {/**Route below is not associated with any path. This means that this route will be invoked
             * whenever any URL path entered is not found
             */}
            <Route render={() => {
              return (
                    <Jumbotron>
                      <Container>
                        <Row>
                          <h3 className="display-3">Page not found</h3>
                        </Row>
                      </Container>
                    </Jumbotron>
                  );
              }} 
            />
          </Switch> 
        </Suspense>
      </Router>
    </Container>
    <Container>
    <div  className="footerbt container text-center">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Linden Ustawi</a>
    </div>
    </Container>
    </Container> 

  );
}



export default App;