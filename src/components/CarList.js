import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CarItem from './CarItem';

const CarList = ({ cars, updateSoldStatus }) => {
  return (
    <Row>
      {cars.length === 0 ? (
        <Col className="text-center">
          <p>No cars available. Please add a new car.</p>
        </Col>
      ) : (
        cars.map(car => (
          <Col md={4} key={car.id} className="mb-4">
            <CarItem car={car} updateSoldStatus={updateSoldStatus} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default CarList;
