import { component$ } from "@builder.io/qwik";

export default component$(
  ({ label, percent }: { label: string; percent: string }) => {
    return (
      <div class="text-[0.9rem]">
        <div class="flex justify-between items-center mb-3">
          <div>{label}</div>
          <div>{percent}%</div>
        </div>
        <div
          class=" bg-slate-400 h-[5px]"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    );
  }
);
