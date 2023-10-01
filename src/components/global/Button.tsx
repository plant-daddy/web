import { type JSX, splitProps } from 'solid-js'

export const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [{ disabled, children, class: className, type = 'button' }, rest] = splitProps(props, [
    'disabled',
    'children',
    'class',
    'type'
  ])

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      class={`disabled:opacity-50 active:opacity-80 items-center justify-center rounded p-4  hover:opacity-90 transition-all ${className}`}>
      {children}
    </button>
  )
}
