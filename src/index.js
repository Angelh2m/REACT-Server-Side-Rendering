import React from "react";
import "./app.css";
import { hydrate } from "react-dom";

import App from "./App";
import Data from "./users";

hydrate(<App />, document.getElementById("root"));
