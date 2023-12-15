import React from "react";
const Image = ({ imageUrl }) => {
  return (
    <>
      <div className="image-container">
        <img src={imageUrl} alt="Random" />
      </div>
    </>
  );
};

export default Image;
