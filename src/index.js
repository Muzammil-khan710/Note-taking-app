import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Context/AuthContext";
import { NoteProvider } from "./Context/NoteContext";
import { ArchiveProvider } from "./Context/ArchiveContext";
 
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <NoteProvider>
            <ArchiveProvider>
              <App />
            </ArchiveProvider>
          </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
