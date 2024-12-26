import { component$ } from "@builder.io/qwik";
import TourImage from "~/media/images/1.jpg?jsx";
import EmobotImage from "~/media/images/4.jpg?jsx";
import Anime from "~/media/images/6.png?jsx";
import CloverAuctionImage from "~/media/images/9.jpg?jsx";

export default component$(() => {
  return (
    <section class="py-10" id="portfolio">
      <div class="container">
        <h2 class="text-[1.5rem] kaushan-script-regular">PROJECTS</h2>
        <div class="columns-2 md:columns-3 gap-5 mt-5">
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
            href="https://anime-adventure-ig41.vercel.app/"
            class="block mb-5"
            target="_blank"
          >
            <Anime class="w-full aspect-auto" loading="lazy" decoding="async" />
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
            href="https://github.com/DevWaiYanLinn/clover-auction"
            class="block mb-5"
            target="_blank"
          >
            <CloverAuctionImage
              class="w-full aspect-auto"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </section>
  );
});
