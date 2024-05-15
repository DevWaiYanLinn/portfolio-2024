import { component$ } from '@builder.io/qwik';
import Input from '~/components/input';

export default component$(() => {
    return (
        <form class="mt-5 poppins-light">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                <div class="col-span-2 md:col-span-1">
                    <Input
                        type="text"
                        placeholder="Name*"
                    />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <Input
                        type="email"
                        placeholder="Email*"
                    />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <Input
                        type="tel"
                        placeholder="Phone*"
                    />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <Input
                        type="Subject"
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
    );
});
