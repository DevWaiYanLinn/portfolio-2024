import { component$ } from '@builder.io/qwik';
import Progress from '~/components/progress';

export default component$(() => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 poppins-light">
            <Progress
                label="HTML"
                percent="100"
            />
            <Progress
                label="PHP"
                percent="75"
            />
            <Progress
                label="CSS"
                percent="75"
            />
            <Progress
                label="JAVASCRIPT"
                percent="80"
            />
            <Progress
                label="NodeJS"
                percent="80"
            />
            <Progress
                label="React"
                percent="80"
            />
        </div>
    );
});
