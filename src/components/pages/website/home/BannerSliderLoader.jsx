import React from "react";

const BannerSliderLoader = ({
  count = 1,
  cols = 1,
  className = "h-[7px]",
  classNameGrid = "gap-1",
}) => {
  const box = [];
  let i;

  let innerBox = () => {
    while (count % cols !== 0) {
      count++;
    }
    return count;
  };

  for (i = 1; i <= innerBox(); i++) {
    box.push(
      <div
        key={i}
        className={`${className} bg-[#d1d5db] w-full rounded-md relative loading-bar overflow-hidden `}
      ></div>
    );
  }

  if (cols !== 0) {
    return (
      <div
        className={`${classNameGrid} grid p-2 `}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {box}
      </div>
    );
  }
};

export default BannerSliderLoader;
