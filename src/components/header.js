import React from "react";

export default function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}
