import { createSignal } from "solid-js";
import Message from "./components/Message";

function App() {
  const [inputValue, setInputValue] = createSignal("");
  const [subject, setSubject] = createSignal(true);
  const [messageValue, setMessageValue] = createSignal();

  const sendMessage = (event) => {
    event.preventDefault();

    setSubject((subject) => !subject);
    setMessageValue(inputValue());
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <Message subject={subject()} message={messageValue()}></Message>
        </div>
        <div className="bg-gray-300 p-4">
          <form onSubmit={sendMessage}>
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
              value={inputValue()}
              onInput={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
