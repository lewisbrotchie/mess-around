import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const middleDotUnicode = "\u00B7";

const SocialCard = styled.div`
  height: 300px;
  font-family: Verdana;
  display: flex;
  border: solid 2px red;
`;

const ProfilePicture = styled.img`
  margin: 15px;
  height: 40px;
  border: solid 2px lightblue;
  border-radius: 5px 20px 5px;
`;

const Username = styled.h4`
  padding: 5px;
`;

const Handle = styled.h6`
  padding: 5px;
`;

class App extends Component {
  render() {
    return (
      <SocialCard>
        <ProfilePicture src={logo} alt="logo" />
        <Username>The Practical Dev</Username>
        <Handle>@ThePracticalDev {middleDotUnicode} Sep 10</Handle>
      </SocialCard>
    );
  }
}

export default App;
