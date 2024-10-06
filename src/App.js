import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarForm from './components/CarForm';
import CarList from './components/CarList';

const App = () => {
  // State to hold the list of cars
  const [cars, setCars] = useState([]);

  // Function to add a new car to the list
  const addCar = (car) => {
    setCars([...cars, car]);
  };

  // Function to update the sold status of a car
  const updateSoldStatus = (id) => {
    setCars(cars.map(car => (car.id === id ? { ...car, sold: true } : car)));
  };

  // Function to remove a car from the list
  const removeCar = (id) => {
    // Filter out the car with the matching id
    setCars(cars.filter(car => car.id !== id));
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
          {/* Pass the removeCar function to CarList */}
          <CarList cars={cars} updateSoldStatus={updateSoldStatus} removeCar={removeCar} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
