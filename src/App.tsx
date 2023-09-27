import type { Component } from "solid-js";

import { Input } from "./components/global";
import { Button } from "./components/global/Button";

const App: Component = () => {
  return (
    <form class="flex flex-col items-center justify-center gap-4 h-screen mx-64">
      <Input name="email" label="Email" placeholder="Email" />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <Button class="bg-green-light">Sign in</Button>
    </form>
  );
};

export default App;
