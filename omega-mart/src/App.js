import './App.css';
import React from "react";

function App() {

  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // })
  const jsonMessage = JSON.stringify({ hello: "hello from post request" });
  React.useEffect(() => {

    fetch("/api", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: jsonMessage 
    })
    .then((res) => res.json())
    .then((data) => setData(data.message));
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { !data ? "calling the api..." : data}
        </p>
       
      </header>
    </div>
  );
}

export default App;
