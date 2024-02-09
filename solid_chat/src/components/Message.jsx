import { createSignal, createEffect } from "solid-js";

function Message(props) {
  const [messages, setMessages] = createSignal([]);

  createEffect(() => {
    if (props.message) {
      const newMessage = {
        key: Date.now(),
        content: props.message,
        subject: props.subject,
        time: new Date().toLocaleTimeString(),
      };

      const exists = messages().some(
        (message) => message.content === newMessage.content
      );

      if (!exists) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    }
  });

  return (
    <div>
      {messages().map((message) => (
        <div
          key={message.key}
          className={
            message.subject
              ? "flex w-full mt-2 space-x-3 max-w-xs"
              : "flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
          }
        >
          <div>
            <div
              className={
                message.subject
                  ? "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"
                  : "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              }
            >
              <p className="text-sm">{message.content}</p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              {message.time}
            </span>
          </div>
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
}

export default Message;
