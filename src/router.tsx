import { Outlet, Route, Routes, useNavigate } from '@solidjs/router'
import { createEffect, type Component } from 'solid-js'

import { SignIn } from './pages/public/SignIn'
import { Dashboard } from './pages/private/Dashboard'
import { Faq } from './pages/public/Faq'

const Protected = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('pd-solid-token')

  createEffect(() => {
    if (!token) navigate('/', { replace: true })
  })

  return <Outlet />
}

const Public = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('pd-solid-token')

  createEffect(() => {
    if (token) navigate('/dashboard', { replace: true })
  })

  return <Outlet />
}

const Router: Component = () => (
  <Routes>
    <Route path="/" component={Public}>
      <Route path={'/'} component={SignIn} />
    </Route>
    <Route path="/dashboard" component={Protected}>
      <Route path={'/'} component={Dashboard} />
    </Route>
    <Route path={'/faq'} component={Faq} />
    <Route path="*" component={() => <div>Page Not found!!!</div>} />
  </Routes>
)

export default Router
