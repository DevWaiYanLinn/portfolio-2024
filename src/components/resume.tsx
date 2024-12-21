import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="py-10 bg-white" id="resume">
      <div class="container">
        <h2 class="text-[1.5rem] kaushan-script-regular">RESUME</h2>
        <p class="mt-5 poppins-light text-[0.9rem]">
          Skilled developer with experience in PHP and Node.js, currently
          studying AI and Deep Learning. Proficient in bug reporting, testing,
          and feature development.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <h2 class="text-[1.3rem] poppins-medium">Education</h2>
            <div class="border-l-4 border-l-slate-400 pl-5 resume relative">
              <h3 class="text-[1rem] poppins-regular">
                Bachelor of Computer Science (B.C.Sc)
              </h3>
              <div class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                2016 - 2022
              </div>
              <h4 class="poppins-medium py-3 text-[0.9rem]">
                University of Computer Studies (Maubin)
              </h4>
              <p class="poppins-light text-[0.9rem] pb-3">
                I graduated from the University of Computer Studies (Maubin) .
                During my time at the university, I learned several technologies
                including HTML, CSS, JavaScript, SQL, and others.
              </p>
            </div>
            <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
              <h3 class="text-[1rem] poppins-regular">
                Artificial Intelligence and Deep Learning
              </h3>
              <div class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                2023 - current
              </div>
              <h4 class="poppins-medium py-3 text-[0.9rem]">
                Metro IT and Japanese Language Center
              </h4>
              <p class="poppins-light text-[0.9rem]">
                Currently, I am learning Artificial Intelligence and Deep
                Learning. I have completed the NAT-TEST N4 level and am now
                studying for the N3 level at Metro IT and Japanese Language
                Center.
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-[1.3rem] poppins-medium">
              Professional Experience
            </h2>
            <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
              <h3 class="text-[1rem] poppins-regular">
                Wed developer and application developer
              </h3>
              <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                2022 - 2023
              </h4>
              <p class="poppins-medium py-3 text-[0.9rem]">
                METATEAM MYANMAR Co., Ltd
              </p>
              <p class="poppins-light text-[0.9rem] pb-3">
                I worked at METATEAM MYANMAR Co., Ltd. as a PHP and Node.js
                Developer for 1 year and 6 months. During my tenure, I was
                responsible for reporting bugs, conducting tests, and developing
                new features for projects.
              </p>
            </div>
            <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
              <h3 class="text-[1rem] poppins-regular">
                On Job Training Developer
              </h3>
              <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                1 year
              </h4>
              <p class="poppins-medium py-3 text-[0.9rem]">
                Myanmar IT Consulting, Innocreation and BIB Training Center
              </p>
              <p class="poppins-light text-[0.9rem]">
                After graduating, I completed a three-month on-the-job training
                at Myanmar IT Consulting Co., Ltd, Innocreation Co., Ltd and BIB
                Training Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
