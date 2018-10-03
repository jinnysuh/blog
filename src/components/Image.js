import React from "react";

export default function Image({ src, style }) {
  return (
    <img
      alt=""
      src={src}
      style={{
        width: "100%",
        ...style
      }}
      rel=""
    />
  );
}
