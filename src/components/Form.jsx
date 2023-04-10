import React, { useRef, useState } from "react";

const Form = ({ submitSearch }) => {
  const [city, setCity] = useState("")
  const ref = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;

    submitSearch(city);
    handleClick();
  };

  const handleClick = () => {
    // 👇️ reset input field's value
    ref.current.value = "";
  };

  return (
    <div className="p-container">
      <form className="search-box" onSubmit={onSubmit}>
        <div className="input-group">
          <span className="icon">Search
            <i className="bx bx-search"></i>
          </span>
          <input
            ref={ref}
            type="text"
            className="input"
            placeholder="          Type a location Id..."
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
