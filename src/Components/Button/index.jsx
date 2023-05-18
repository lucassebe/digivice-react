import React from "react";
import Button from '@mui/material/Button'
import { Search } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {red } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    secondary: red
  }
});


export default function Btn ({funcSearch}) {
        return (
            <ThemeProvider theme={theme}>
            <div id="button">
                <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<Search />}
                    onClick={funcSearch}
                >
                    Search</Button>
            </div>
            </ThemeProvider>
        );
    }
