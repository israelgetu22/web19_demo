import React, { useState } from "react";
import Child from "./Child";

function FavChild() {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <h1>Favorite Child</h1>
      {/* <h2>{userInput}</h2> */}

      <Child userInput={userInput} />

      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
}

export default FavChild;
