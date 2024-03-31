import React, { useEffect, useState } from "react";
import emojiData from "./data.json";
import "./emoji.css";

const Emoji = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
    alert(`Copied ${symbol} to Clipboard`);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(input.toLocaleLowerCase())
    );
    setData(newData);
  }, [input]);
  return (
    <div className="emoji-cont">
      <input
        className="inp"
        type="text"
        placeholder="search for Emoji..."
        value={input}
        onChange={handleChange}
      />
      <div className="typo">
        {input === "" ? (
          <h1 className="flex">Start typing to see an Emoji...</h1>
        ) : (
          data.map((emoji) => {
            return (
              <p
                className="emoji-title"
                key={emoji.title}
                onClick={() => handleCopy(emoji.symbol)}
              >
                {emoji.title} {emoji.symbol}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Emoji;
