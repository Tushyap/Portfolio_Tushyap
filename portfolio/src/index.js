import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dpz706gflxq23qlx.us.auth0.com"
      clientId="ofCtrE7ypzCsRmZUWvzdyPoEBCQIetqe"
      authorizationParams={{
        redirect_uri: "https://drive.google.com/drive/folders/1s4OBu2vCjnU0Ahn2Hy6lGzb3SdVfKTtx",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
