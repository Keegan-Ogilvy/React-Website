import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Navbar} from "./components/Navbar.jsx";
import {Home, About, Contact, Services} from "./components/pages";



function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <SearchBar setResults={setResults} />    <SearchResultList results={results} />  
    </div>
  )
}

export default App;
