import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {red } from '@mui/material/colors';
import axios from 'axios';

const theme = createTheme({
    palette: {
      secondary: red
    }
  });

  interface InputState {
    digimonData: {
      name: string;
      img: string;
      level: string;
      // Adicione outras propriedades de dados que você deseja exibir
    } | null;
  }
  
  class Input extends React.Component<{}, InputState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        digimonData: null,
      };
    }
  
    handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const digimonName = (event.target as HTMLInputElement).value;
        try {
          const response = await axios.get(`https://digimon-api.com/api/v1/digimon/${digimonName}`);
          const digimonData = response.data[0];
          this.setState({ digimonData });
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    render() {
      const { digimonData } = this.state;
  
      return (
        <ThemeProvider theme={theme}>
          <div id="input">
            <TextField
              color="secondary"
              size="small"
              label="Ex: Agumon"
              onKeyPress={this.handleKeyPress}
            />
            {digimonData && (
              <div>
                <h2>{digimonData.name}</h2>
                <img src={digimonData.img} alt={digimonData.name} />
                <p>{digimonData.level}</p>
                {/* Renderizar outros dados que você queira exibir */}
              </div>
            )}
          </div>
        </ThemeProvider>
      );
    }
  }
  
  export default Input;
