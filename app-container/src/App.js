import React, { useEffect, useRef } from 'react'


function App() {
  const iFrameRef = useRef();

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if(event?.data?.message !== 'send_token') return;
      console.info("⬇️  Recibió mensaje del Hijo");
      console.table(event?.data);
    });

    setTimeout(() => {
      iFrameRef.current.contentWindow.postMessage({message: "hello", payload: "Soy tu padre 🤖"}, '*');
    }, 3000);
  }, []);

  return (
    <div className="App">
      <iframe
        ref={iFrameRef}
        title="app-container"
        src="http://localhost:3001/"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          zIndex: 999999,
        }}
      >
        {" "}
        Your browser doesn't support iframes{" "}
      </iframe>
    </div>
  );
}

export default App;
