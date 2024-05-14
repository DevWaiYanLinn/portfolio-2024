import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import PortfolioImage from '~/media/images/2.jpg?jsx';
import TourImage from '~/media/images/1.jpg?jsx';
import PicalcBotImage from '~/media/images/3.jpg?jsx';
import EmobotImage from '~/media/images/4.jpg?jsx';

export default component$(() => {
  return (
    <>
      <section
        class="relative min-h-[50vh] md:min-h-[70vh] bg-white overflow-hidden"
        id="home"
      >
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
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
            <ul class="floating">
              <li class="opacity-15">
                <svg
                  viewBox="175.7 78 490.6 436.9"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#61dafb">
                    <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                    <circle cx="420.9" cy="296.5" r="45.7" />
                  </g>
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  fill="none"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 141.53199999999998"
                >
                  <path
                    d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                    fill="#e9ca32"
                  />
                  <path
                    d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                    fill="#ffde25"
                  />
                  <g fill="#fff">
                    <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
                  </g>
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  viewBox="0.1 0.3 799.91 366.73"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                >
                  <path
                    d="M622.25.3l177.76 176.9-177.76 176.9L444.5 177.2z"
                    fill="#77c1d2"
                  />
                  <path
                    d="M177.86.3l368.51 366.73H190.86L.1 177.2z"
                    fill="#2d3441"
                  />
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  fill="none"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 141.53"
                >
                  <path
                    d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                    fill="#1b73ba"
                  />
                  <path
                    d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                    fill="#1c88c7"
                  />
                  <path
                    d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  viewBox="-.557 117.607 598.543 423.631"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#0091e2">
                    <path d="m592.162 277.804c-1.664-1.37-16.642-12.597-48.815-12.597-8.321 0-16.92.822-25.24 2.191-6.102-41.898-41.327-62.162-42.714-63.257l-8.598-4.93-5.547 7.942c-6.934 10.68-12.204 22.729-15.255 35.052-5.824 23.824-2.219 46.279 9.985 65.447-14.7 8.216-38.553 10.133-43.545 10.406h-393.853c-10.262 0-18.583 8.216-18.583 18.348-.554 33.956 5.27 67.912 17.197 99.951 13.59 35.052 33.838 61.067 59.91 76.95 29.4 17.799 77.383 27.931 131.468 27.931 24.408 0 48.815-2.19 72.946-6.572 33.56-6.025 65.734-17.526 95.412-34.23a260.485 260.485 0 0 0 64.902-52.577c31.342-34.778 49.925-73.663 63.515-108.167h5.547c34.116 0 55.195-13.418 66.844-24.92 7.766-7.12 13.59-15.882 17.751-25.74l2.497-7.12z" />
                    <path d="m55.193 306.83h52.698c2.497 0 4.716-1.916 4.716-4.654v-46.553c0-2.465-1.942-4.655-4.716-4.655h-52.698c-2.496 0-4.715 1.916-4.715 4.655v46.553c.277 2.738 2.219 4.655 4.715 4.655zm72.668 0h52.699c2.496 0 4.715-1.916 4.715-4.654v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.7c-2.496 0-4.715 1.916-4.715 4.655v46.553c.278 2.738 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 1.942 4.655 4.715 4.655zm72.946 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 2.219 4.655 4.715 4.655zm-147-66.543h52.698c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c.278 2.464 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 1.942 4.655 4.715 4.655m72.946 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m0-66.817h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m73.5 133.36h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.941-4.655-4.715-4.655h-52.698c-2.497 0-4.716 1.916-4.716 4.655v46.553c.278 2.738 2.22 4.655 4.716 4.655" />
                  </g>
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  fill="none"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 141.53199999999998"
                >
                  <path
                    d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                    fill="#e34f26"
                  />
                  <path
                    d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                    fill="#ef652a"
                  />
                  <path
                    d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  viewBox=".15 .13 799.7 479.69"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                    fill="#06b6d4"
                  />
                </svg>
              </li>
              <li class="opacity-15">
                <svg
                  width="25"
                  viewBox="0 0 256 255"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <defs>
                    <linearGradient
                      x1="12.959%"
                      y1="12.039%"
                      x2="79.639%"
                      y2="78.201%"
                      id="a"
                    >
                      <stop stop-color="#387EB8" offset="0%" />
                      <stop stop-color="#366994" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="19.128%"
                      y1="20.579%"
                      x2="90.742%"
                      y2="88.429%"
                      id="b"
                    >
                      <stop stop-color="#FFE052" offset="0%" />
                      <stop stop-color="#FFC331" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                    fill="url(#a)"
                  />
                  <path
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                    fill="url(#b)"
                  />
                </svg>
              </li>
            </ul>
          </nav>
          <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col">
            <h2 class="text-[2.5rem] kaushan-script-regular">
              Hey! I am Clover
            </h2>
            <p class="text-md text-slate-600 poppins-light text-center">
              A freelance <strong class="text-black">web developer</strong>
              &nbsp; based in myanamar
            </p>
            <p class="text-md text-slate-600 poppins-light">
              Turning your <strong class="text-black">ideas</strong> into &nbsp;
              <strong class="text-black">reality</strong>
            </p>
            <div class="flex space-x-7 mt-6">
              <a href="https://twitter.com/yan_wai71169">
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
              <a href="https://github.com/DevWaiYanLinn">
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
              <a href="https://www.linkedin.com/in/wai-yan-lin-809998260/">
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
          <p class="mt-5 poppins-light text-[0.9rem]">
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
          <p class="mt-5 poppins-light text-[0.9rem]">
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
                <p class="poppins-light py-3 text-[0.9rem]">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light text-[0.9rem]">
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
                <p class="poppins-light py-3 text-[0.9rem]">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light text-[0.9rem]">
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
                <p class="poppins-light py-3 text-[0.9rem]">
                  Rochester Institute of Technology, Rochester, NY
                </p>
                <p class="poppins-light text-[0.9rem]">
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
                <p class="poppins-light text-[0.9rem]">
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
              <p class="poppins-light text-[0.9rem]">
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
              <p class="poppins-light text-[0.9rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda libero adipisci iste rerum deserunt possimus, commodi
                dignissimos odit? Eveniet doloribus natus dolorem reiciendis
                similique voluptatem libero? Libero, qui. Corporis, veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10" id="portfolio">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">Portfolio</h2>
          <div class="columns-2 md:columns-3 gap-5 mt-5">
            <a href="#" class="block mb-5" target="_blank">
              <PortfolioImage
                class="w-full aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://devwaiyanlinn.github.io/Travel-And-Tour/"
              class="block mb-5"
              target="_blank"
            >
              <TourImage
                class="w-full aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://github.com/DevWaiYanLinn/emobot"
              class="block mb-5"
              target="_blank"
            >
              <EmobotImage
                class="w-full aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://vercel.com/devwaiyanlinns-projects/pic-calc-bot"
              class="block mb-5"
              target="_blank"
            >
              <PicalcBotImage
                class="w-full aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </section>
      <section class="py-10 bg-slate-50" id="contact">
        <div class="container">
          <h2 class="text-[1.5rem] kaushan-script-regular">Contact</h2>
          <form class="mt-5 poppins-light">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 py-2 border focus:outline-none"
                  placeholder="Name*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="email"
                  class="w-full pl-2 py-2 border focus:outline-none"
                  placeholder="Email*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 py-2 border focus:outline-none"
                  placeholder="Phone*"
                />
              </div>
              <div class="col-span-2 md:col-span-1">
                <input
                  type="text"
                  class="w-full pl-2 py-2 border focus:outline-none"
                  placeholder="Subject*"
                />
              </div>
              <div class="col-span-2">
                <textarea
                  placeholder="Message*"
                  rows={5}
                  class="pl-2 py-2 border w-full resize-none focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button class="px-8 py-2 border border-slate-300 poppins-light bg-white">
                  SEND
                </button>
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
