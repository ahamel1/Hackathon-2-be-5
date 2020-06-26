import React from 'react';

import { Container } from 'reactstrap';

import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
