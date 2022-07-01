import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import familyPhoto from "./images/family.jpeg";

import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  ProgressBar,
} from "react-bootstrap";

// const NavBarLinks = () => {
//   let routes = useRoutes([
//       { path: '/projects', element: <Main /> },
//       { path: '/add', element: <Add /> },
//       { path: '/faq', element: <Faq /> },
//       { path: '/my-projects', element: <MyProjects /> },
//   ]);
//   return routes;
// };

const cards = [
  {
    title: "title 1",
    details: "details1",
    text: "text 1",
    progress: 40,
    childName: "Alisher",
    link: "link 1",
  },
  {
    title: "title 1",
    details: "details1",
    text: "text 1",
    progress: 20,
    childName: "Alisher",
    link: "link 1",
  },
  {
    title: "title 1",
    details: "details1",
    text: "text 1",
    progress: 80,
    childName: "Alisher",
    link: "link 1",
  },
];

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    setIsVisible((current) => !current);
  };

  const handleSubmit = function (e) {
    alert("it works!");
    e.preventDefault();
  };

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Contracts</Nav.Link>
                <Nav.Link href="#home">Children</Nav.Link>
                <Nav.Link href="#link">Role: parent</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Notifications
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Additional
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="famImg">
        <img
          src={familyPhoto}
          alt="Family photo"
          width="15%"
          height="max-content"
        ></img>
      </div>

      <div>
        <div className="m-3">Active contracts</div>
        <div className="m-3">
          <div>
            <div className="d-flex justify-content-between flex-wrap">
              {cards.map((card) => (
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {card.details}
                    </h6>
                    <p className="card-text">{card.text}</p>
                    <div>
                      <ProgressBar variant="success" now={card.progress} />
                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="card-text text-muted">{card.childName}</h6>
                      <a href={card.link} className="card-link">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="m-3">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-light my-2"
        >
          Create a contract
        </button>
        <div className={isVisible ? "visible" : "invisible"}>
          <div className="mb-4">
            <h6 className="text-uppercase"></h6>
            <hr className="solid"></hr>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <h4>Trust Contract</h4>
            </div>
            <div className="form-group row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Summary</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="enter the summary"
                ></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Reward</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="enter the rewards"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Task 1</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="enter the task"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Task 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="enter the task"
              ></input>
            </div>
            <div className="form-group row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Details</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="enter the details"
                ></input>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Child</label>
                <select id="inputState" className="form-control">
                  {/* <option defaultValue>Choose...</option> */}
                  <option disabled={true} value="">
                    --Choose and option--
                  </option>
                  <option>Alish</option>
                  <option>Miko</option>
                  <option>Aidai</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                ></input>
              </div>
            </div>

            {/* DatePicker start */}
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <Form.Group controlId="dob">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Deadline"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            {/* DatePicker end */}

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                ></input>
                <label className="form-check-label" htmlFor="gridCheck">
                  I agree to this terms
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Send to child
            </button>
          </form>
          <div className="mb-4">
            <h6 className="text-uppercase"></h6>
            <hr className="solid"></hr>
          </div>
        </div>

        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age(dob)</th>
                <th scope="col">Email</th>
                <th scope="col">Interests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alisher</td>
                <td>17</td>
                <td>sample@gmail.com</td>
                <td>volleyball, swimming, hiking</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Miko</td>
                <td>12</td>
                <td>sample@gmail.com</td>
                <td>tennis, math, drawing</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Aidai</td>
                <td>6</td>
                <td>sample@gmail.com</td>
                <td>chess, uno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
