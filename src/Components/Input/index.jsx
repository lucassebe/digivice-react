import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import api from "../../services/api";
import Btn from "../Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import digimonImg from "../../images/ff49c45e27b705edde662cb862936adc.jpg";
import { Skeleton } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: red,
  },
});

export default function Input() {
  const [digimon, setDigimon] = useState("");
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState(digimonImg);
  const [digimonid, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value !== "") {
      getDigimon();
    }
  }, []);

  async function getDigimon() {
    try {
      setLoading(true);
      const response = await api.get(`/${value}`);
      setDigimon(response.data);
      setId(response.data);
      setImageUrl(response.data["images"][0]["href"]);
      setLoading(false);
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
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="image-container">
        {loading ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={350}
            height={350}
          />
        ) : (
          <img src={imageUrl} alt="guilmon-img" />
        )}
      </div>
      <div id="nome">
        <h2>{digimon && digimon.name + " ID: " + digimon.id}</h2>
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
