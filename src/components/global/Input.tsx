import { JSX, Show, splitProps } from "solid-js";

type TextInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input(props: TextInputProps) {
  const [{ error, label, name, required, class: className }, rest] = splitProps(
    props,
    ["label", "name", "error", "required", "class"]
  );

  return (
    <div class="flex flex-col items-start w-full">
      <Show when={label}>
        <label for={name}>
          {label} {required && <span>*</span>}
        </label>
      </Show>

      <input
        {...rest}
        class={`px-2 py-4 border-2 border-green-light rounded w-full ${className}`}
        id={name}
        aria-invalid={!!error}
        aria-errormessage={`${name}-error`}
      />

      <Show when={error}>
        <div id={`${name}-error`} class="text-red">
          {error}
        </div>
      </Show>
    </div>
  );
}
