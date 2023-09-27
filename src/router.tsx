import { Route, Routes, Router as SolidRouter } from "@solidjs/router";
import App from "./App";
import { Component } from "solid-js";

const Router: Component = () => (
  <SolidRouter>
    <Routes>
      <Route path="/" component={App} />
    </Routes>
  </SolidRouter>
);

export default Router;
