import React from "react";

export default function Button({ btnClass, text, onClick }: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {text}
    </button>
  );
}
