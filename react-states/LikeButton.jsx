import { useState } from "react";

export default function Button({ text, onClick }) {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
    // console.log(newVal);
  };
  //   let clicked = () => {
  //     console.log("clicked");
  //   };
  return (
    <div>
      <p> Clicks: {clicks}</p>
      <p onClick={toggleLike}>
        {/* {isLiked.toString()} */}
        {isLiked ? (
          <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
