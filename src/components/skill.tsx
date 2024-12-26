import { component$ } from "@builder.io/qwik";
import Progress from "~/components/progress";

export default component$(() => {
  const skills = [
    { label: "HTML", percent: "100" },
    { label: "PHP", percent: "75" },
    { label: "CSS", percent: "75" },
    { label: "JavaScript", percent: "80" },
    { label: "NodeJS", percent: "80" },
    { label: "React", percent: "80" },
  ];

  return (
    <section class="bg-slate-50 py-10" id="skills">
      <div class="container">
        <h2 class="text-[1.5rem] kaushan-script-regular">Skills</h2>
        <p class="mt-5 poppins-light text-[0.9rem]">
          <q>
            I have two years of experience in the software development industry.
            I've worked on various projects including property systems, care
            systems, and contributed to several others. Additionally, I'm
            currently learning Japanese at the N3 level.
          </q>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 poppins-light">
          {skills.map((skill) => (
            <Progress
              key={skill.label}
              label={skill.label}
              percent={skill.percent}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
