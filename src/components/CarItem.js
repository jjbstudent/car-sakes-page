import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CarItem = ({ car, updateSoldStatus, removeCar }) => {
  console.log('Car details:', car);  // Debugging line
  return (
    <Card>
      <Card.Img variant="top" src={car.image} alt={`${car.make} ${car.model}`} />
      <Card.Body>
        <Card.Title>{car.make} {car.model}</Card.Title>
        {car.sold ? (
          <Button variant="secondary" disabled>SOLD</Button>
        ) : (
          <Button onClick={() => updateSoldStatus(car.id)} variant="success">Mark as SOLD</Button>
        )}
         <Button onClick={() => removeCar(car.id)} variant="danger" style={{ marginLeft: '10px' }}>Remove Car</Button>
      </Card.Body>
    </Card>
  );
};

export default CarItem;
