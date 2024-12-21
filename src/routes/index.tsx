import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Skill from "~/components/skill";
import Resume from "~/components/resume";
import Service from "~/components/service";
import Portfolio from "~/components/portfolio";
import Contact from "~/components/contact";
import Home from "~/components/home";

export default component$(() => {
  return (
    <>
      <Home />
      <Skill />
      <Resume />
      <Service />
      <Portfolio />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Clover",
  meta: [
    {
      name: "Clover",
      content: "Resume for work",
    },
    {
      property: "og:title",
      content: "Clover",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://portfolio-2024-three-woad.vercel.app/",
    },
    {
      property: "og:description",
      content: "Hey! I am clover.Web developer base in myanmar.",
    },
    {
      property: "og:site_name",
      content: "Clover Resume",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "article:author",
      content: "DevWaiYanLin",
    },
    {
      property: "twitter:title",
      content: "Clover",
    },
    {
      property: "twitter:description",
      content: "Hey! I am clover.Web developer base in myanmar.",
    },
  ],
};
