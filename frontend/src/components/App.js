import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { Component } from "react"
import { render } from "react-dom"
import HomePage from "./HomePage";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00bfff"
        },
        secondary: {
            main: "#ff4000"
        }
    }
});

export default function App () {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)