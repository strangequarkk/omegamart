//import './App.css';
import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopPage from "./components/pages/ShopPage";

function App() {

  const [data, setData] = React.useState(null);

  const jsonMessage = { hello: "hello from post request" };
  React.useEffect(() => {

    axios.post("/api", jsonMessage)
    .then((res) => setData(res.data.message));

  })


  const querySearch = (queryString) => {
    console.log('run search for '+queryString);
  }

  return (
 <>
 <Header searchFunc={querySearch}/>
 <main>
   <ShopPage/>
 </main>
 <Footer/>
 </>
  );
}

export default App;
