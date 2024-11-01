// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Crane and shades work in udaipur Rajasthan</title>
        <meta
          name="description"
          content="Sai engineering, your premier destination for
                    crane machine and Shed Construction Services"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
