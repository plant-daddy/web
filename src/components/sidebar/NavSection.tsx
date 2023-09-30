import { type JSX } from 'solid-js'

export const NavSection = (props: { title: string; children: JSX.Element }) => {
  return (
    <div class="mb-4">
      <div class="font-bold text-gray-400 text-sm mb-2">{props.title}</div>
      <div class="space-y-4 mt-2">{props.children}</div>
    </div>
  )
}
