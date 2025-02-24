import { useState, useEffect } from "react";
import { Table, Card } from "react-bootstrap";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Card className="p-4 shadow">
      <h2>Product List</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Colours</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.productType.name}</td>
              <td>{p.colours.map(c => <p>{c.name}</p> )}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}