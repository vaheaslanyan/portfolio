import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap here in index.js before any app css sheets ensures styles matching between production and development. That's because, all your vendor css (node_modules) stuff is bundled in a separate css file then your application styles in the production build (npm run build). So if we don't put the vendor css before all of our styles, we may get different UI in development and in production. Because, in the development environment, CRA preserves the order of styles while loading (in this case, application styles first and vendor styles later) but in production, the vendor styles loaded first and application styles later.
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
