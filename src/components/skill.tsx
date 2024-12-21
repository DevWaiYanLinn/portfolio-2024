import { component$ } from "@builder.io/qwik";
import Progress from "~/components/progress";

export default component$(() => {
  return (
    <section class="bg-slate-50 py-10" id="skills">
      <div class="container">
        <h2 class="text-[1.5rem] kaushan-script-regular">SKILLS</h2>
        <p class="mt-5 poppins-light text-[0.9rem]">
          <q>
            I have two years of experience in the software development industry.
            I've worked on various projects including property systems, care
            systems, and contributed to several others. Additionally, I'm
            currently learning Japanese at the N3 level.
          </q>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 poppins-light">
          <Progress label="HTML" percent="100" />
          <Progress label="PHP" percent="75" />
          <Progress label="CSS" percent="75" />
          <Progress label="JAVASCRIPT" percent="80" />
          <Progress label="NodeJS" percent="80" />
          <Progress label="React" percent="80" />
        </div>
      </div>
    </section>
  );
});
