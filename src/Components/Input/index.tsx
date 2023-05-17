import React from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: red
  }
});


class Input extends React.Component {
    render(){
        return(
            <ThemeProvider theme={theme}>
            <div id="input">
                <TextField 
                color="secondary"
                size="small"
                label="Ex: Agumon"
                />
            </div>
            </ThemeProvider>
        )
    }
}
export default Input;