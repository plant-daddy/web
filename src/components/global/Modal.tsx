import { type Accessor, type JSX, type Setter, Show, splitProps } from 'solid-js'
import { Portal } from 'solid-js/web'

export const Modal = (
  props: {
    isOpen: Accessor<boolean>
    setIsOpen: Setter<boolean>
    footer?: JSX.Element
    body: JSX.Element
  } & JSX.HTMLAttributes<HTMLDivElement>
) => {
  const [local] = splitProps(props, ['isOpen', 'setIsOpen', 'body', 'footer', 'class'])

  return (
    <Show when={local.isOpen()}>
      <Portal>
        <div
          class={
            'flex items-center justify-center min-h-screen fixed inset-0 bg-gray-900 bg-opacity-75 '
          }
          onClick={(e) => {
            if (e.target === e.currentTarget) local.setIsOpen(false)
          }}>
          <div
            class={`bg-green-800 p-4 rounded-lg shadow-xl transform transition-all w-lg ${local.class}`}>
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
            {local.body}
            <Show when={local.footer}>
              <div class="bg-green-800 py-3 flex flex-row-reverse px-6 gap-4">{local.footer}</div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  )
}
