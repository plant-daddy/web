import { A } from '@solidjs/router'
import { type JSX } from 'solid-js'

interface NavLinkProps {
  icon?: JSX.Element
  title: string
  href: string
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <A href={props.href} activeClass="text-green-500" class="flex items-center text-gray-500">
      {props.icon}
      <span class="ml-4 font-medium">{props.title}</span>
    </A>
  )
}
