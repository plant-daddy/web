import { Route, Routes } from '@solidjs/router'
import { type Component } from 'solid-js'
import { SignIn } from './pages/public/SignIn'

const Router: Component = () => (
  <Routes>
    <Route path="/" component={SignIn} />
  </Routes>
)

export default Router
