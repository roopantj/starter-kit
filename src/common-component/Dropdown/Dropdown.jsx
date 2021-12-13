import React, { createRef, useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClick";
import "./Dropdown.style.scss";

const Dropdown = ({ options, defaultValue }) => {
  const [active, setActive] = useState(defaultValue || options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const dropdowRef = useRef(null);
  const outsideClick = useClickOutside(dropdowRef);

  useEffect(() => {
    setActive(defaultValue);
  }, [defaultValue]);

  return (
    <div className="drop-down" ref={dropdowRef}>
      <div
        className="drop-down--value"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="drop-down--value-data">{active}</div>
        <div
          className={`drop-down--arrow ${showOptions ? "down" : "up"}`}
        ></div>
      </div>
      <div className="drop-down--options">
        {showOptions &&
          outsideClick &&
          options.map((option) => (
            <div
              className={`drop-down--option ${
                option === active ? "active" : ""
              }`}
              key={option}
              onClick={() => {
                setActive(option);
                setShowOptions(false);
              }}
            >
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
