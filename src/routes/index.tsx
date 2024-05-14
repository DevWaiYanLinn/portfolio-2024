import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <section class="relative min-h-[50vh] md:min-h-[70vh] bg-white" id="home">
        <div class="container">
          <nav class="flex justify-between py-5 items-center">
            <h1 class="text-[2rem] kaushan-script-regular">Clover</h1>
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
            </ul>
          </nav>
          <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col">
            <h2 class="text-[2.5rem] kaushan-script-regular">
              Hey! I am Clover
            </h2>
            <p class="text-md text-slate-600 poppins-light text-center">
              A freelance <strong class="text-black">web developer</strong>&nbsp;
              based in myanamar
            </p>
            <p class="text-md text-slate-600 poppins-light">
              Turning your <strong class="text-black">ideas</strong> into
              <strong class="text-black">reality</strong>
            </p>
            <div class="flex space-x-7 mt-6">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="X-Twitter-Logo--Streamline-Logos"
                  height="17"
                  width="17"
                >
                  <desc>
                    X Twitter Logo Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="m13.458 9.12244 7.5158 -7.9657h2.4916l-0.0107 0.01176 -8.8892 9.424 8.1385 10.8018c0.2068 0.2744 0.2405 0.6422 0.0872 0.9498 -0.1435 0.2878 -0.4278 0.4764 -0.7453 0.4994h-5.0964c-0.2598 -0.0188 -0.5001 -0.1488 -0.6582 -0.3585l-5.7269 -7.6011 -7.47199 7.9596H0.534546l8.922324 -9.4297L1.31843 2.61205c-0.20678 -0.27444 -0.24055 -0.64223 -0.08721 -0.94974 0.15333 -0.30752 0.4674 -0.50186 0.81102 -0.50186h4.96503c0.28455 0 0.55258 0.13365 0.72381 0.36092L13.458 9.12244Zm-0.7628 1.99966c-0.0257 -0.0299 -0.0491 -0.0611 -0.0703 -0.0934L6.55538 2.97297H3.85973L17.467 21.0334h2.6957l-7.4675 -9.9113Z"
                    clip-rule="evenodd"
                    stroke-width="1"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Github-Logo-2--Streamline-Logos"
                  height="17"
                  width="17"
                >
                  <desc>
                    Github Logo 2 Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#000000"
                    d="M11.996 1.284a10.986 10.986 0 0 0 -3.472 21.412c0.548 0.095 0.722 -0.227 0.722 -0.517 0 -0.263 0.006 -0.991 0 -1.91 -3.057 0.662 -3.688 -1.448 -3.688 -1.448a2.907 2.907 0 0 0 -1.22 -1.607c-0.997 -0.682 0.075 -0.669 0.075 -0.669a2.307 2.307 0 0 1 1.683 1.131 2.34 2.34 0 0 0 3.197 0.914 2.34 2.34 0 0 1 0.697 -1.464c-2.439 -0.279 -5.004 -1.22 -5.004 -5.432a4.248 4.248 0 0 1 1.132 -2.948 3.942 3.942 0 0 1 0.107 -2.907s0.924 -0.295 3.02 1.128a10.402 10.402 0 0 1 5.503 0c2.102 -1.422 3.018 -1.128 3.018 -1.128 0.405 0.92 0.444 1.96 0.109 2.907a4.243 4.243 0 0 1 1.13 2.95c0 4.223 -2.569 5.15 -5.016 5.42a2.604 2.604 0 0 1 0.752 2.026v3.041c0 0.294 0.177 0.619 0.735 0.512a10.986 10.986 0 0 0 -3.48 -21.411Z"
                    stroke-width="1"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Linkedin-Logo--Streamline-Logos"
                  height="17"
                  width="17"
                >
                  <desc>
                    Linkedin Logo Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3.5 6a2.5 2.5 0 1 0 0 -5 2.5 2.5 0 0 0 0 5ZM6 23V8H1v15h5ZM8 8h4.5v1.946C13.216 9.005 14.746 8 17.5 8c4.33 0 5.5 4.32 5.5 7v8h-5v-8c0 -1 -0.5 -3 -2.5 -3 -1.42 0 -2.42 1.008 -3 1.951V23H8V8Z"
                    clip-rule="evenodd"
                    stroke-width="1"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class=" bg-slate-50 py-10" id="skills">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">SKILLS</h2>
          <p class="mt-5 poppins-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quos omnis quibusdam iure enim eos perspiciatis sunt minus veniam
            laudantium maxime harum repudiandae modi necessitatibus similique
            eligendi saepe, facilis porro?
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 poppins-light">
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-full h-full bg-slate-400"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>PHP</span>
                <span>75%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-[75%] h-full bg-slate-400"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-[80%] h-full bg-slate-400"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>NodeJs</span>
                <span>80%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-[80%] h-full bg-slate-400  "></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>JAVASCRIPT</span>
                <span>80%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-[80%] h-full bg-slate-400"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-3">
                <span>React</span>
                <span>80%</span>
              </div>
              <div class="h-[5px]">
                <div class="w-[80%] h-full bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-white" id="resume">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">RESUME</h2>
          <p class="mt-5 poppins-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quos omnis quibusdam iure enim eos perspiciatis sunt minus veniam
            laudantium maxime harum repudiandae modi necessitatibus similique
            eligendi saepe, facilis porro?
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <h2 class="text-[1.3rem] poppins-medium">Education</h2>
              <div class="border-l-4 border-l-slate-400 pl-5 resume relative">
                <h3 class="text-[1rem] poppins-regular">
                  Master of Fine Arts & Graphic Design
                </h3>
                <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                  2015 - 2016
                </h4>
                <p class="poppins-light py-3">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light">
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
                <h3 class="text-[1rem] poppins-regular pt-3">
                  Master of Fine Arts & Graphic Design
                </h3>
                <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                  2015 - 2016
                </h4>
                <p class="poppins-light py-3">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light">
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
            </div>
            <div>
              <h2 class="text-[1.3rem] poppins-medium">
                Professional Experience
              </h2>
              <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
                <h3 class="text-[1rem] poppins-regular">
                  Master of Fine Arts & Graphic Design
                </h3>
                <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                  2015 - 2016
                </h4>
                <p class="poppins-light py-3">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light">
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div class="border-l-4 border-l-slate-400 pl-4 resume relative">
                <h3 class="text-[1rem] poppins-regular pt-3">
                  Master of Fine Arts & Graphic Design
                </h3>
                <h4 class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                  2015 - 2016
                </h4>
                <p class="poppins-light py-3">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light">
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-slate-50" id="service">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">What I Do</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 poppins-regular mt-5">
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Coding-Apps-Website-Browser-Image--Streamline-Ultimate"
                height="24"
                width="24"
              >
                <desc>
                  Coding Apps Website Browser Image Streamline Icon:
                  https://streamlinehq.com
                </desc>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 8.38403H4V16.884h16V8.38403Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 20.134h5.5"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 23.25h5.5"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 23.25v-3.116h7v3.116"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.5 16.8839 3.956 -4.395c0.2626 -0.2917 0.5856 -0.5228 0.9464 -0.6772 0.3609 -0.1545 0.751 -0.2285 1.1434 -0.2171 0.3923 0.0114 0.7775 0.108 1.1288 0.2832 0.3512 0.1751 0.6602 0.4246 0.9054 0.7311l3.42 4.275"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M7.5 12.384c-0.27614 0 -0.5 -0.2239 -0.5 -0.5s0.22386 -0.5 0.5 -0.5"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M7.5 12.384c0.27614 0 0.5 -0.2239 0.5 -0.5s-0.22386 -0.5 -0.5 -0.5"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.75 23.25V2.75c0 -0.53043 0.210714 -1.03914 0.58579 -1.41421C1.71086 0.960714 2.21957 0.75 2.75 0.75h18.5c0.5304 0 1.0391 0.210714 1.4142 0.58579 0.3751 0.37507 0.5858 0.88378 0.5858 1.41421v20.5"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.769012 4.96411H23.238"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.082 0.75v4.214"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.41501 0.75v4.214"
                  stroke-width="1.5"
                ></path>
              </svg>
              <h3 class="text-[1rem] poppins-regular my-2">WEB APPS</h3>
              <p class="poppins-light text-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda libero adipisci iste rerum deserunt possimus, commodi
                dignissimos odit? Eveniet doloribus natus dolorem reiciendis
                similique voluptatem libero? Libero, qui. Corporis, veniam.
              </p>
            </div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Android-1--Streamline-Ultimate"
                height="24"
                width="24"
              >
                <desc>Android 1 Streamline Icon: https://streamlinehq.com</desc>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.75 23.25H5.25c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393 -0.2813 -0.2813 -0.43934 -0.6629 -0.43934 -1.0607v-10.5h16.5v10.5c0 0.3978 -0.158 0.7794 -0.4393 1.0607s-0.6629 0.4393 -1.0607 0.4393Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 10.5c0 -2.18804 -0.8692 -4.28646 -2.4164 -5.83363C16.2865 3.11919 14.188 2.25 12 2.25c-2.18804 0 -4.28646 0.86919 -5.83363 2.41637C4.61919 6.21354 3.75 8.31196 3.75 10.5v0.75h16.5v-0.75Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M8.625 7.50293c-0.20711 0 -0.375 -0.16789 -0.375 -0.375s0.16789 -0.375 0.375 -0.375"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M8.625 7.50293c0.20711 0 0.375 -0.16789 0.375 -0.375s-0.16789 -0.375 -0.375 -0.375"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M15.375 7.50293c-0.2071 0 -0.375 -0.16789 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  d="M15.375 7.50293c0.2071 0 0.375 -0.16789 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.359 3.68217 5.25 0.753174"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.641 3.68217 18.75 0.753174"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 11.2532c-0.79565 0 -1.55871 0.316 -2.12132 0.8786C1.06607 12.6944 0.75 13.4575 0.75 14.2532v6"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 11.2532c0.7956 0 1.5587 0.316 2.1213 0.8786 0.5626 0.5626 0.8787 1.3257 0.8787 2.1214v6"
                  stroke-width="1.5"
                ></path>
              </svg>
              <h3 class="text-[1rem] poppins-regular my-2">MOBILE APPS</h3>
              <p class="poppins-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda libero adipisci iste rerum deserunt possimus, commodi
                dignissimos odit? Eveniet doloribus natus dolorem reiciendis
                similique voluptatem libero? Libero, qui. Corporis, veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-white" id="contact">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">Contact</h2>
          <form class="mt-5 poppins-light">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 pb-2 border-b-2 focus:outline-none"
                  placeholder="Name*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="email"
                  class="w-full pl-2 pb-2 border-b-2 focus:outline-none"
                  placeholder="Email*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 pb-2 border-b-2 focus:outline-none"
                  placeholder="Phone*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 pb-2 border-b-2 focus:outline-none"
                  placeholder="Subject*"
                />
              </div>
              <div class=" col-span-2">
                <textarea
                  placeholder="Message*"
                  rows={5}
                  class="pl-2 pb-2 border-b-2 w-full resize-none"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'My Resume',
  meta: [
    {
      name: 'Clover',
      content: 'Resume for work',
    },
  ],
};
