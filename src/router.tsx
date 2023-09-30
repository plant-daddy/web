import { Outlet, Route, Routes, useNavigate } from '@solidjs/router'
import { createEffect, type Component } from 'solid-js'

import { SignIn } from './pages/public/SignIn'
import { Dashboard } from './pages/private/Dashboard'
import { PublicFaq } from './pages/public/Faq'
import { Sidebar } from './components/sidebar'
import { PrivateFaq } from './pages/private/Faq'

const Protected = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('pd-solid-token')

  createEffect(() => {
    if (!token) navigate('/', { replace: true })
  })

  return (
    <div class="flex gap-16 p-16 h-screen">
      <Sidebar />
      <div class="bg-gray-800 p-8 rounded-lg flex-grow">
        <Outlet />
      </div>
    </div>
  )
}

const Public = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('pd-solid-token')

  createEffect(() => {
    if (token) navigate('/dashboard/plants', { replace: true })
  })

  return <Outlet />
}

const Router: Component = () => (
  <Routes>
    <Route path="/" component={Public}>
      <Route path={'/'} component={SignIn} />
    </Route>
    <Route path="/dashboard" component={Protected}>
      <Route path={'/plants'} component={Dashboard} />
      <Route path={'/faq'} component={PrivateFaq} />
    </Route>
    <Route path={'/faq'} component={PublicFaq} />
    <Route path="*" component={() => <div>Page Not found!!!</div>} />
  </Routes>
)

export default Router
