import { type JSX, Show, splitProps } from 'solid-js'

type TextAreaProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
}

export const TextArea = (props: TextAreaProps) => {
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

      <textarea
        {...rest}
        class={`p-2  border-2 border-green-500 rounded w-full bg-gray-800 ${className}`}
        id={name}
        rows={3}
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
