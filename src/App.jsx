import React from "react";
import "./App.css";
import Indeximg from "./Components/Img";
import Input from "./Components/Input";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card id="card">
          <Input />
        </Card>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default App;
