import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CarItem from './CarItem';

const CarList = ({ cars, updateSoldStatus, removeCar }) => {
  return (
    <Row>
      {cars.length === 0 ? (
        // Display a message if there are no cars available
        <Col className="text-center">
          <p>No cars available. Please add a new car.</p>
        </Col>
      ) : (
        // Map through the cars array and render a CarItem for each car
        cars.map(car => (
        <Col md={4} key={car.id} className="mb-4">
            <CarItem 
              car={car} 
              updateSoldStatus={updateSoldStatus} 
              removeCar={removeCar}  // Pass removeCar to each CarItem
            />
        </Col>
        ))
      )}
    </Row>
  );
};

export default CarList;
