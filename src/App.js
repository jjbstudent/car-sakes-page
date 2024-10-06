import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarForm from './components/CarForm';
import CarList from './components/CarList';

const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const updateSoldStatus = (id) => {
    setCars(cars.map(car => car.id === id ? { ...car, sold: true } : car));
  };

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={8}>
          <h1 className="text-center">Car Sales Page</h1>
          <CarForm addCar={addCar} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center my-5">Available Cars</h2>
          <CarList cars={cars} updateSoldStatus={updateSoldStatus} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
