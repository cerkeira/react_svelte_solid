<script>
  import "../app.css";
import Message from "./components/message.svelte";

  let inputValue = "";
  let subject = true;
  let messageValue;

  const sendMessage = (event) => {
    event.preventDefault();

    subject = !subject;
    messageValue = inputValue;
    inputValue = "";
  };
</script>

<div
  class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10"
>
  <div
    class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden"
  >
    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
      <Message {subject} message={messageValue} />
    </div>
    <div class="bg-gray-300 p-4">
      <form on:submit={sendMessage}>
        <input
          class="flex items-center h-10 w-full rounded px-3 text-sm"
          type="text"
          placeholder="Type your message…"
          bind:value={inputValue}
        />
      </form>
    </div>
  </div>
</div>
