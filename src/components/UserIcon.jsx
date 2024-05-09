import { useState } from "react";

function UserIcon(props) {
  const { images } = props;
  let [imageIndex, setImageIndex] = useState(0);

  function increase() {
    if (imageIndex <= 2) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  function decrease() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(3);
    }
  }

  return (
    <div className="imageContainer">
      <button onClick={decrease}>←</button>
      <img src={images[imageIndex]} alt="carousel" />

      <button onClick={increase}>→</button>
    </div>
  );
}

export default UserIcon;
