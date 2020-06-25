import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import UserCalendar from './Calendar';

function App() {
  return (
    <div className="App">
      <Container>
        <UserCalendar />
      </Container>
    </div>
  );
}

export default App;
