import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import api from "../../services/api";
import Btn from "../Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    secondary: red,
  },
});

export default function Input() {
  const [digimon, setDigimon] = useState("");
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "/images/ff49c45e27b705edde662cb862936adc.jpg"
  );
  const [digimonid, setId] = useState("");
  useEffect(() => {
    if (value !== "") {
      getDigimon();
    }
  }, []);

  async function getDigimon() {
    try {
      const response = await api.get(`/${value}`);
      setDigimon(response.data);
      setId(response.data)
      setImageUrl(response.data["images"][0]["href"]);
    } catch (error) {
      toast.error(`Digimon "${value}" não encontrado!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="image-container">
        <img src={imageUrl} alt="guilmon-img" />
      </div>
      <div id="nome">
        <h2>{digimon && digimon.name + ' ID: ' + digimon.id}</h2>
      </div>
      <div id="input">
        <TextField
          color="secondary"
          size="small"
          label="Ex: Agumon"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Btn funcSearch={getDigimon}></Btn>
      </div>
    </ThemeProvider>
  );
}
