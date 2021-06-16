import React from "react";
import ColorSelector from "./ColorSelector";
import styled from "styled-components";

const Body = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  // Recoil enables us to manage state in a non-hierarchal manner
  // The state is stored in atoms.js and set in ColorSelector component

  return (
    <Body>
      <h1>Recoil State Management Project</h1>
      <ColorSelector />
    </Body>
  );
}

export default App;
