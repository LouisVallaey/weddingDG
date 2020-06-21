import React from "react";
import "./App.css";
import image from "../assets/foto.JPG";
import savethedate from "../assets/safethedate.svg";
import styled from "styled-components";
import DateCountdown from "react-date-countdown-timer";
const FlexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Image = styled.div`
  background-image: url(${image});
  height: 550px;
  width: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1000px) {
    width: 80vw;
    height: 50vh;
  }
`;
const Info = styled.div`
  font-family: "Roboto", sans-serif;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;
const Head = styled.div`
  background-image: url(${savethedate});
  height: 300px;
  width: 350px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 700px) {
    width: 80vw;
    height: 35vh;
  }
`;
const Copyright = styled.div`
  font-size: 10px;
  position: absolute;
  left: 10px;
  bottom: 5px;
  font-family: "Roboto", sans-serif;
  color: black;
  a {
    color: black;
  }
  @media (max-width: 700px) {
  }
`;
function App() {
  document.title = "Save The Date";
  return (
    <FlexContainer>
      <Image></Image>
      <Info>
        <Head></Head>
        <DateCountdown
          dateTo="Juli 03, 2021 00:00:00"
          mostSignificantFigure="day"
          locales={["year", "month", "Day", "Hr", "Min", "Sec"]}
          locales_plural={["years", "months", "Days", "Hrs", "Mins", "Secs"]}
        />
      </Info>
      <Copyright>
        Made by <a href="http://louisvallaey.be">louisvallaey.be</a>
      </Copyright>
    </FlexContainer>
  );
}

export default App;
