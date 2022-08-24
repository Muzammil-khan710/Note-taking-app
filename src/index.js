import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { AuthProvider, NoteProvider,  DeleteProvider, ArchiveProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <NoteProvider>
            <DeleteProvider>
              <ArchiveProvider>
                <App />
              </ArchiveProvider>
            </DeleteProvider>
          </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
