import React from 'react';
import './App.css';
import Btn from './Components/Button'
import Indeximg from './Components/Img';
import Input from './Components/Input';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';


export const App = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card id="card">
          <Indeximg />
          <Input />
          <Btn />
        </Card>
      </Container>
    </div>
  );
}

export default App;
