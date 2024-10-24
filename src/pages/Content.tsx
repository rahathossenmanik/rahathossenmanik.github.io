import { Col, Container, Row } from "reactstrap";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Profile from "./Profile";
import Biodata from "./bio/Biodata";
import Resume from "./resume/Resume";

const Content = () => {
  return (
    <>
      <Container>
        <Row className="g-5">
          <Col lg="4" className="sticky-lg-top vh-100">
            <Profile />
          </Col>
          <Col lg="8">
            <Router>
              <Routes>
                <Route path="biodata" element={<Biodata />} />
                <Route path="/" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
