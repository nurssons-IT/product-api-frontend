import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import CreateProduct from "./Component/CreateProduct";
import ProductList from "./Component/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Navbar >
        <Container>
          <Navbar.Brand href="/">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Create Product</Nav.Link>
            <Nav.Link as={Link} to="/products">View Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<CreateProduct />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Container>
    </Router>
  );
}