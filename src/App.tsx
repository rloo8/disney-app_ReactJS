import React from "react";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/Header";
import styled from "styled-components";

const Background = styled.div`
  background: linear-gradient(#2c4f95 50%, #5f498c);
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const FixedBox = styled.div`
  background-color: #d6d6dc;
  border-top: 5px solid #fff;
  border-right: 8px solid #4c4b4b;
  overflow: hidden;
  width: 80%;
  height: 75vh;
  padding: 30px;
`;

function App() {
  return (
    <>
      <Background>
        <Header />
        <FixedBox>
          <Outlet />
        </FixedBox>
      </Background>

      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
