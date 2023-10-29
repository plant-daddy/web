import { Link } from '@solidjs/router'
import { TbHelp, TbPlant } from 'solid-icons/tb'

import name from '../../assets/name.png'
import { useAuth } from '../../contexts/auth'
import { Button } from '../global/Button'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const Sidebar = () => {
  const { signOut } = useAuth()

  return (
    <div class="bg-green-800 flex flex-col justify-between py-21 px-16">
      <div class="flex flex-col gap-12">
        <Link href="/dashboard/plants">
          <img src={name} alt="Plant Daddy" />
        </Link>
        <NavSection title="GENERAL">
          <NavLink title="Plants" href="/dashboard/plants" icon={<TbPlant size={18} />} />
        </NavSection>
        <NavSection title="PUBLIC">
          <NavLink title="FAQ" href="/faq" icon={<TbHelp size={18} />} />
        </NavSection>
      </div>
      <Button class="bg-red-500 w-full" onClick={signOut}>
        Log out
      </Button>
    </div>
  )
}
