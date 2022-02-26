import * as React from "react";

const MultilineText = ({
  text,
  className,
}: {
  text: string[];
  className: string;
}) => (
  <div className={className}>
    {text.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
);

export default MultilineText;
