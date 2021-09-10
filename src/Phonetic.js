import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <audio controls src={props.phonetic.audio}></audio>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
