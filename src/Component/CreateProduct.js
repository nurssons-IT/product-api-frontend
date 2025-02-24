import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [productType, setProductType] = useState("");
  const [colours, setColours] = useState("");

  const handleSubmit = async (e) => {
    {/* INSERT INTO product_type (id, name) VALUES (1, 'Sofa');
INSERT INTO colour (id, name) VALUES (1, 'Blue'), (2, 'Ruby');
*/}
    e.preventDefault();
    const payload = {
      name,
      productType: { id: parseInt(productType) }, 
      colours: colours.split(",").map(id => ({ id: parseInt(id.trim()) })) 
 
    };
console.log(payload)
    await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setName("");
    setProductType("");
    setColours("");
  };

  return (
    <Card className="p-4 shadow">
      <h2>Create New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Type</Form.Label>
          <Form.Control type="number" value={productType} onChange={(e) => setProductType(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Colours(1=red, 2=green, 3=blue) </Form.Label>
          <Form.Control type="text"  value={colours} onChange={(e) => setColours(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Create Product</Button>
      </Form>
    </Card>
  );
}
