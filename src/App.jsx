
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { data } from "./data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [clothes, setClothes] = useState(data);

  const filteredClothes = (searchTerm) => {
    const newClothes = data.filter(
      (element) => element.searchTerm === searchTerm
    );
    setClothes(newClothes);
  };

  const showAll = () => {
    setClothes(data);
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Clothing Store</h1>
              <h2 className="shipping">Free Standard Shipping</h2>

              <Buttons
                filteredClothes={filteredClothes}
                showAll={showAll}
              />

              <Clothes clothes={clothes} />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
