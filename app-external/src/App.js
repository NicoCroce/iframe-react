import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [newMessage, setNewMessage] = useState("El padre no envío el mensaje");

  useEffect(() => {
    setTimeout(() => {
      console.log("Envía el mensaje desde el hijo");
      window.parent.postMessage(
        {
          message: "send_token",
          payloload: {
            token: "asdadjfjshjfhjahsfhahsjfh17267361aghsd"
          }
        },
        "*"
      );
    }, 2000);

    window.addEventListener("message", (event) => {
      console.log("⬆️  Recibido el mensaje del padre");
      console.table(event.data);
      setNewMessage(event?.data?.payload);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{newMessage}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
