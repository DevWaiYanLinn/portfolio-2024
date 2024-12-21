import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <nav class="py-5">
      <div class="container flex justify-between items-center">
        <h1 class="text-[2rem] kaushan-script-regular z-10">
          <a href="#home">Clover</a>
        </h1>
        <ul class="md:flex space-x-14 poppins-regular hidden z-10">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
        </ul>
        <div></div>
      </div>
    </nav>
  );
});
