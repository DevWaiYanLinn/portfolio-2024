import { component$ } from "@builder.io/qwik";
import Form from "~/components/form";

export default component$(() => {
  return (
    <section class="py-10 bg-slate-50" id="contact">
      <div class="container">
        <h2 class="text-[1.5rem] kaushan-script-regular">Contact</h2>
        <Form />
      </div>
    </section>
  );
});
