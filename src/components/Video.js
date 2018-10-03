import React from "react";

export default function Video({ videoCode }) {
  return (
    <iframe
      title="blah"
      width="500"
      height="315"
      src={`https://www.youtube.com/embed/${videoCode}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
