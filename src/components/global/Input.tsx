import { type JSX, Show, splitProps } from 'solid-js'

type TextInputProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> & {
  label: string
  error?: string
}

export const Input = (props: TextInputProps) => {
  const [local, rest] = splitProps(props, ['label', 'name', 'error', 'required', 'class'])

  return (
    <div class="w-full">
      <div class={`outline relative focus-within:border-gray-300 rounded ${local.class}`}>
        <input
          {...rest}
          placeholder=" "
          id={local.name}
          aria-invalid={!!local.error}
          aria-errormessage={`${local.name}-error`}
          class="block p-4 w-full focus:outline-none bg-transparent"
        />
        <label
          for={local.name}
          class="text-gray-300 absolute top-0 text-lg bg-green-800 p-3 duration-300 origin-0">
          {local.label}
          <Show when={local.required}>
            <span>*</span>
          </Show>
        </label>
      </div>

      <Show when={local.error}>
        <div id={`${local.name}-error`} class="text-red-500">
          {local.error}
        </div>
      </Show>
    </div>
  )
}
