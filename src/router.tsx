import { Outlet, Route, Routes, useNavigate } from '@solidjs/router'
import { type Component, createEffect } from 'solid-js'

import { Sidebar } from './components/sidebar'
import { CreatePlant } from './pages/private/plants/Create'
import { EditPlant } from './pages/private/plants/Edit'
import { PlantsList } from './pages/private/plants/List'
import { FaqDetails } from './pages/public/Faq/Details'
import { PublicFaq } from './pages/public/Faq/List'
import { SignIn } from './pages/public/SignIn'

const Protected = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('pd-solid-token')

  createEffect(() => {
    if (!token) navigate('/', { replace: true })
  })

  return (
    <div class="flex gap-16 p-16 h-screen bg-gray-900">
      <Sidebar />
      <div class="bg-gray-800 p-8 rounded-lg flex-grow overflow-y-scroll justify-start">
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

  return (
    <div class="bg-gray-900">
      <Outlet />
    </div>
  )
}

const Router: Component = () => (
  <Routes>
    <Route path="/" component={Public}>
      <Route path={'/'} component={SignIn} />
    </Route>
    <Route path="/dashboard" component={Protected}>
      <Route path={'/plants'}>
        <Route path={'/'} component={PlantsList} />
        <Route path={'/create'} component={CreatePlant} />
        <Route path={'/:id'} component={EditPlant} />
      </Route>
    </Route>
    <Route path={'/faq'}>
      <Route path={'/'} component={PublicFaq} />
      <Route path={'/:id'} component={FaqDetails} />
    </Route>
    <Route path="*" component={() => <div>Page Not found!!!</div>} />
  </Routes>
)

export default Router
