
import React, { useEffect, useState } from "react";
import Image from "./Image";

const Images = () => {
  const [myarr, setMyArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const response = await data.json();
    const randomImages = [];
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * response.length);
      randomImages.push(response[randomIndex]);
    }
    setMyArr(randomImages);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getImages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-grid">
      {loading ? (
        <div className="loader">
        </div>
      ) : (
        myarr.map((image, index) => (
          <Image key={index} imageUrl={image.download_url} />
        ))
      )}
    </div>
  );
};

export default Images;

