import React, { useState } from "react";
import "./package.css";
import Book from "./book";
import Gallery from "./gallary";

// Import images for Tent Stay, Glam Stay, and Dome Stay
import img1 from "../assets/img5.jpg";
import img2 from "../assets/tent1.jpg";
import img3 from "../assets/tent3.jpg";
import img4 from "../assets/tent4.jpg";
import img5 from "../assets/tent5.jpg";


import img11 from "../assets/g1.jpeg";
import img22 from "../assets/g2.jpeg";
import img33 from "../assets/g3.jpeg";
import img44 from "../assets/g5.jpeg";
import img55 from "../assets/g6.jpeg";


import imgD1 from "../assets/g1.jpeg"; // Add images for Dome Stay
import imgD2 from "../assets/g2.jpeg";
import imgD3 from "../assets/g3.jpeg";
import imgD4 from "../assets/g4.jpeg";
import imgD5 from "../assets/g5.jpeg";
import imgD6 from "../assets/g6.jpeg";

const tentGallery = [
  { image: img1, className: "" },
  { image: img2, className: "" },
  
  { image: img5, className: "" },
  { image: img3, className: "tall" },
  { image: img4, className: "wide" },
 
];

const glamGallery = [
  { image: img11, stayType: "Glam Stay" },
  { image: img22, stayType: "Glam Stay" },
  { image: img33, stayType: "Glam Stay" },
  { image: img44, stayType: "Glam Stay" },
  { image: img55, stayType: "Glam Stay" },
  
];

const domeGallery = [
  { image: imgD1, stayType: "Dome Stay" },
  { image: imgD2, stayType: "Dome Stay" },
  { image: imgD3, stayType: "Dome Stay" },
  { image: imgD4, stayType: "Dome Stay" },
  { image: imgD5, stayType: "Dome Stay" },
  { image: imgD6, stayType: "Dome Stay" },
];

function App() {
  const [selectedStay, setSelectedStay] = useState(null); // Track selected stay type
  const [showGallery, setShowGallery] = useState(false); // Control the gallery display
  const [currentGallery, setCurrentGallery] = useState([]); // Track the gallery to display

  const handleGalleryClick = (stayType) => {
    setSelectedStay(stayType);
    if (stayType === "Tent Stay") {
      setCurrentGallery(tentGallery);
    } else if (stayType === "Glam Stay") {
      setCurrentGallery(glamGallery);
    } else if (stayType === "Dome Stay") {
      setCurrentGallery(domeGallery);
    }
    setShowGallery(true); // Show the gallery when a stay type is clicked
  };

  return (
    <div className="app">
      <h1 className="heading">Our Packages</h1>
      <div className="card-container horizontal">
        {/* Card for Tent Stay */}
        <div className="card">
          <div className="card-image-container">
            <img src={img2} alt="Tent Stay" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Tent Stay</h2>
            <p className="card-price">Starting From ₹1199 Per Person</p>
            <button className="add-to-cart" onClick={() => handleGalleryClick("Tent Stay")}>
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Card for Glam Stay */}
        <div className="card">
          <div className="card-image-container">
            <img src={img1} alt="Glam Stay" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Glam Stay</h2>
            <p className="card-price">Starting From ₹1999 Per Person</p>
            <button className="add-to-cart" onClick={() => handleGalleryClick("Glam Stay")}>
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Card for Dome Stay */}
        <div className="card">
          <div className="card-image-container">
            <img src={imgD1} alt="Dome Stay" className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Dome Stay</h2>
            <p className="card-price">Starting From ₹2999 Per Person</p>
            <button className="add-to-cart" onClick={() => handleGalleryClick("Dome Stay")}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Render Book component if a stay type is selected */}
      {selectedStay && <Book stayType={selectedStay} />}

      {/* Render Gallery based on selected stay */}
      {showGallery && (
        <Gallery
          galleryItems={currentGallery} // Show the current gallery based on the selected stay
          stayType={selectedStay} // Pass the selected stay type for dynamic title
        />
      )}
    </div>
  );
}

export default App;
