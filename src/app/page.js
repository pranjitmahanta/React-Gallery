"use client";
import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/nature1.jpg", category: "Nature" },
  { id: 2, src: "/images/nature2.jpg", category: "Nature" },
  { id: 3, src: "/images/tech1.jpg", category: "Tech" },
  { id: 4, src: "/images/tech2.jpg", category: "Tech" },
  { id: 5, src: "/images/art1.jpg", category: "Art" },
  { id: 6, src: "/images/art2.jpg", category: "Art" },
  { id: 7, src: "/images/game1.jpg", category: "Games" },
  { id: 8, src: "/images/game2.jpg", category: "Games" },
];

Modal.setAppElement("body");

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="app">
      <h1>Image Gallery</h1>

      {/* Filter Buttons */}
      <div className="filters">
        {["All", "Nature", "Tech", "Art", "Games"].map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        {filteredImages.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.category}
            width={300}
            height={200}
            className="gallery-img"
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <Modal isOpen onRequestClose={() => setSelectedImage(null)} className="modal">
          <Image src={selectedImage} alt="Selected" width={600} height={400} />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
