import { type JSX, Show, splitProps } from 'solid-js'

type TextInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const Input = (props: TextInputProps) => {
  const [{ error, label, name, required, class: className }, rest] = splitProps(props, [
    'label',
    'name',
    'error',
    'required',
    'class'
  ])

  return (
    <div class="flex flex-col items-start w-full">
      <Show when={label}>
        <label for={name}>
          {label}
          <Show when={required}>
            <span>*</span>
          </Show>
        </label>
      </Show>

      <input
        {...rest}
        class={`px-2 py-4 border-2 border-green-500 rounded w-full ${className} bg-gray-800`}
        id={name}
        aria-invalid={!!error}
        aria-errormessage={`${name}-error`}
      />

      <Show when={error}>
        <div id={`${name}-error`} class="text-red-500">
          {error}
        </div>
      </Show>
    </div>
  )
}
