import { useState, useEffect } from "react";

const useClickOutside = (ref) => {
  const [clickedOutside, updateData] = useState(false);
  useEffect(() => {
    const clickHandler = (event) => {
      if (ref && ref.current && ref.current.contains(event.target))
        updateData(true);
      else updateData(false);
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [ref]);

  return clickedOutside;
};

export default useClickOutside;
