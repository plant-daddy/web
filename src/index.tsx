/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import Router from "./router";

render(() => <Router />, document.getElementById("root")!);
