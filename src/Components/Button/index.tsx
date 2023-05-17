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


class Btn extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
            <div id="button">
                <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<Search />}
                    onClick={() => {
                    }}
                >
                    Search</Button>
            </div>
            </ThemeProvider>
        )
    }
}
export default Btn;
