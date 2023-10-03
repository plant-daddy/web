import { type Accessor, type JSX, type Setter, Show, splitProps } from 'solid-js'
import { Portal } from 'solid-js/web'

export const Modal = (props: {
  isOpen: Accessor<boolean>
  setIsOpen: Setter<boolean>
  footer: JSX.Element
  body: JSX.Element
}) => {
  const [{ isOpen, footer, body, setIsOpen }] = splitProps(props, [
    'isOpen',
    'setIsOpen',
    'body',
    'footer'
  ])

  return (
    <Show when={isOpen()}>
      <Portal>
        <div
          class=" flex items-center justify-center min-h-screen fixed inset-0 bg-gray-900 bg-opacity-75"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}>
          <div class="bg-gray-50 p-4 rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
            {body}
            <div class="bg-gray-50 py-3 flex flex-row-reverse px-6 gap-4">{footer}</div>
          </div>
        </div>
      </Portal>
    </Show>
  )
}
