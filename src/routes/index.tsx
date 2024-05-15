import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import PortfolioImage from '~/media/images/2.jpg?jsx';
import TourImage from '~/media/images/1.jpg?jsx';
import PicalcBotImage from '~/media/images/3.jpg?jsx';
import EmobotImage from '~/media/images/4.jpg?jsx';
import Nav from '~/components/nav';
import Banner from '~/components/banner';
import Skill from '~/components/skill';
import Form from '~/components/form';

export default component$(() => {
    return (
        <>
            <section
                class="relative min-h-[50vh] md:min-h-[70vh] bg-white overflow-hidden"
                id="home"
            >
                <div class="container">
                    <Nav />
                    <Banner />
                </div>
            </section>
            <section
                class=" bg-slate-50 py-10"
                id="skills"
            >
                <div class="container">
                    <h2 class="text-[1.5rem] kaushan-script-regular">SKILLS</h2>
                    <p class="mt-5 poppins-light text-[0.9rem]">
                        <q>
                            I have two years of experience in the software
                            development industry. I've worked on various
                            projects including property systems, care systems,
                            and contributed to several others. Additionally, I'm
                            currently learning Japanese at the N3 level.
                        </q>
                    </p>
                    <Skill />
                </div>
            </section>
            <section
                class="py-10 bg-white"
                id="resume"
            >
                <div class="container">
                    <h2 class="text-[1.5rem] kaushan-script-regular">RESUME</h2>
                    <p class="mt-5 poppins-light text-[0.9rem]">
                        Skilled developer with experience in PHP and Node.js,
                        currently studying AI and Deep Learning. Proficient in
                        bug reporting, testing, and feature development.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <div>
                            <h2 class="text-[1.3rem] poppins-medium">
                                Education
                            </h2>
                            <div class="border-l-4 border-l-slate-400 pl-5 resume relative">
                                <h3 class="text-[1rem] poppins-regular">
                                    Bacherlor of Computer Science (B.C.Sc)
                                </h3>
                                <div class="inline-block text-sm poppins-regular mt-3 bg-slate-300 p-2">
                                    2016 - 2022
                                </div>
                                <h4 class="poppins-medium py-3 text-[0.9rem]">
                                    Univesity of Computer Studies (Maubin)
                                </h4>
                                <p class="poppins-light text-[0.9rem] pb-3">
                                    I graduated from the University of Computer
                                    Studies (Maubin) . During my time at the
                                    university, I learned several technologies
                                    including HTML, CSS, JavaScript, SQL, and
                                    others.
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
                                    Currently, I am learning Artificial
                                    Intelligence and Deep Learning. I have
                                    completed the NAT-TEST N4 level and am now
                                    studying for the N3 level at Metro IT and
                                    Japanese Language Center.
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
                                    I worked at METATEAM MYANMAR Co., Ltd. as a
                                    PHP and Node.js Developer for 1 year and 6
                                    months. During my tenure, I was responsible
                                    for reporting bugs, conducting tests, and
                                    developing new features for projects.
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
                                    Myanmar IT Consulting, Innocreation and BIB
                                    Training Center
                                </p>
                                <p class="poppins-light text-[0.9rem]">
                                    After graduating, I completed a three-month
                                    on-the-job training at Myanmar IT Consulting
                                    Co., Ltd, Innocreation Co., Ltd and BIB
                                    Training Center.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="py-10 bg-slate-50"
                id="service"
            >
                <div class="container">
                    <h2 class="text-[1.5rem] kaushan-script-regular">
                        What I Do
                    </h2>
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
                                    Coding Apps Website Browser Image Streamline
                                    Icon: https://streamlinehq.com
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
                            <h3 class="text-[1rem] poppins-regular my-2">
                                WEB APPS
                            </h3>
                            <p class="poppins-light text-[0.9rem]">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Assumenda libero adipisci iste
                                rerum deserunt possimus, commodi dignissimos
                                odit? Eveniet doloribus natus dolorem reiciendis
                                similique voluptatem libero? Libero, qui.
                                Corporis, veniam.
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
                                <desc>
                                    Android 1 Streamline Icon:
                                    https://streamlinehq.com
                                </desc>
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
                            <h3 class="text-[1rem] poppins-regular my-2">
                                MOBILE APPS
                            </h3>
                            <p class="poppins-light text-[0.9rem]">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Assumenda libero adipisci iste
                                rerum deserunt possimus, commodi dignissimos
                                odit? Eveniet doloribus natus dolorem reiciendis
                                similique voluptatem libero? Libero, qui.
                                Corporis, veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="py-10"
                id="portfolio"
            >
                <div class="container">
                    <h2 class="text-[1.5rem] kaushan-script-regular">
                        What I Developed
                    </h2>
                    <div class="columns-2 md:columns-3 gap-5 mt-5">
                        <a
                            href="#"
                            class="block mb-5"
                            target="_blank"
                        >
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
                            href="https://pic-calc-bot.vercel.app"
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
            <section
                class="py-10 bg-slate-50"
                id="contact"
            >
                <div class="container">
                    <h2 class="text-[1.5rem] kaushan-script-regular">
                        Contact
                    </h2>
                    <Form />
                </div>
            </section>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Clover',
    meta: [
        {
            name: 'Clover',
            content: 'Resume for work',
        },
        {
            property: 'og:title',
            content: 'Clover',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: 'https://portfolio-2024-three-woad.vercel.app/',
        },
        {
            property: 'og:description',
            content: 'Hey! I am clover.Web developer base in myanmar.',
        },
        {
            property: 'og:site_name',
            content: 'Clover Resume',
        },
        {
            property: 'og:locale',
            content: 'en_US',
        },
        {
            property: 'article:author',
            content: 'DevWaiYanLin',
        },
        {
            property: 'twitter:title',
            content: 'Clover',
        },
        {
            property: 'twitter:description',
            content: 'Hey! I am clover.Web developer base in myanmar.',
        },
    ],
};
