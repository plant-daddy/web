import { TbPlant, TbHelp } from 'solid-icons/tb'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

import name from '../../assets/name.png'
import { Button } from '../global/Button'
import { useAuth } from '../../contexts/auth'

export const Sidebar = () => {
  const { signOut } = useAuth()

  return (
    <div class="flex flex-col justify-between">
      <div class="flex flex-col gap-12">
        <img src={name} alt="Plant Daddy" />
        <NavSection title="GENERAL">
          <NavLink title="Plants" href="/dashboard/plants" icon={<TbPlant size={18} />} />
          <NavLink title="FAQ" href="/dashboard/faq" icon={<TbHelp size={18} />} />
        </NavSection>
        <NavSection title="PUBLIC">
          <NavLink title="FAQ" href="/faq" icon={<TbHelp size={18} />} />
        </NavSection>
      </div>
      <Button class="bg-red-500 self-end" onClick={signOut}>
        Log out
      </Button>
    </div>
  )
}
