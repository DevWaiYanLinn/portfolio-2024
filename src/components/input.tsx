import { component$ } from '@builder.io/qwik';

export default component$(
    ({
        type = 'text',
        placeholder = '',
    }: {
        type: string;
        placeholder: string;
    }) => {
        return (
            <input
                type={type}
                class="w-full pl-2 py-2 border focus:outline-none"
                placeholder={placeholder}
            />
        );
    }
);
