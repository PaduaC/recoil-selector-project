import React from "react";
import { useRecoilState } from "recoil";
import { inputState } from "./atoms";
import styled from "styled-components";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 150px;
  margin: 10px 25px;
  padding: 4px 12px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;

  input[type="color"] {
    border: none;
    background: none;
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 16px;
  }
`;

const Box = styled.div`
  margin: 25px 25px;
  padding: 25px;
  width: 400px;
  height: 400px;
  border: solid 3px black;
`;

const ColorSelector = () => {
  // Using useRecoilState() in this ColorSelector component reduces the need to pass props from component to component
  /*
    useRecoilState() reads and writes the state like useState()
    The main difference is that useRecoilState() passes an atom as an argument instead of a default value
  */
  const [input, setInput] = useRecoilState(inputState);

  const target = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <Container>
        <input type="color" value={input} onChange={target} />
        <input type="text" value={input} onChange={target} />
      </Container>
      <Box
        style={{
          backgroundColor: input,
        }}
        value={input}
        onChange={target}
      ></Box>
    </div>
  );
};

export default ColorSelector;
