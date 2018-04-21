import React from "react";

export default function Image({src, style }) {
  return (
      <img
        src={src}
        style={{
          width: "100%",
          ...style
        }}
        rel=""
      />
  );
}