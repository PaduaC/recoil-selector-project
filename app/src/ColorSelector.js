import React from "react";

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

const ColorSelector = ({ value, onChange, ...rest }) => {
  return (
    <div>
      <Container>
        <input type="color" value={value} onChange={onChange} {...rest} />
        <input type="text" value={value} onChange={onChange} {...rest} />
      </Container>
      <Box
        style={{
          backgroundColor: value,
        }}
        value={value}
        onChange={onChange}
        {...rest}
      ></Box>
    </div>
  );
};

export default ColorSelector;
