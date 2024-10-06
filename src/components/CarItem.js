import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CarItem = ({ car, updateSoldStatus, removeCar }) => {
  return (
    <Card>
      {/* Display the car's image */}
      <Card.Img variant="top" src={car.image} alt={`${car.make} ${car.model}`} />
      <Card.Body>
        {/* Display the car's make and model */}
        <Card.Title>{car.make} {car.model}</Card.Title>
        
        {/* Conditional rendering for the sold status */}
        {car.sold ? (
          // If the car is sold, display a disabled button
          <Button variant="secondary" disabled>SOLD</Button>
        ) : (
          // If the car is not sold, show a button to mark it as sold
          <Button onClick={() => updateSoldStatus(car.id)} variant="success">Mark as SOLD</Button>
        )}
        
        {/* Button to remove the car from the listing */}
        <Button onClick={() => removeCar(car.id)} variant="danger" style={{ marginLeft: '10px' }}>
          Remove Car
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarItem;

