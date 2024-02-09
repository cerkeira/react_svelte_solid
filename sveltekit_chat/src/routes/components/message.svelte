<script>
  import { afterUpdate } from "svelte";

  let messages = [];

  export let message;
  export let subject;

  afterUpdate(() => {
    if (message) {
      messages = [
      ...messages,
      {
        content: message,
        subject: subject,
        time: new Date().toLocaleTimeString(),
      },
    ];
    }
  });
</script>

<div>
  {#each messages as msg, index (index)}
    <div
      class:index
      class={msg.subject
        ? "flex w-full mt-2 space-x-3 max-w-xs"
        : "flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"}
    >
      <div>
        <div
          class={msg.subject
            ? "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"
            : "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"}
        >
          <p class="text-sm">{msg.content}</p>
        </div>
        <span class="text-xs text-gray-500 leading-none">{msg.time}</span>
      </div>
      <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
    </div>
  {/each}
</div>
