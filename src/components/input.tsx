import type { InputHTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
export default component$((props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input class="w-full pl-2 py-2 border focus:outline-none" {...props} />
  );
});
