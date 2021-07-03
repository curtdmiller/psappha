import * as React from "react";
import { ThemeProvider } from "react-jss";
import Layout from "./components/layout";
import "./styles.css";
import { Theme } from "./theme";

const theme: Theme = {
  background: "#ffffff",
  typography: {
    h1: {
      fontFamily: "'Vollkorn', serif"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}
