import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CarForm = ({ addCar }) => {
  const [carDetails, setCarDetails] = useState({ make: '', model: '', image: '', sold: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ ...carDetails, id: Date.now() });
    setCarDetails({ make: '', model: '', image: '', sold: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formMake">
        <Form.Label>Make</Form.Label>
        <Form.Control type="text" name="make" value={carDetails.make} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formModel">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" name="model" value={carDetails.model} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="image" value={carDetails.image} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Add Car</Button>
    </Form>
  );
};

export default CarForm;
