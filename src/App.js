import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const middleDotUnicode = "\u00B7";

const Interactions = styled.a`
  position: absolute;
  bottom: 0;
  margin-left: 100px;
  width: 400px;
  height: 7%;
  font-size: 7pt;
  padding-left: 60%;
`;

const UserDescription = styled.div`
  position: absolute;
  margin-left: 100px;
  margin-top: 35px;
  width: 400px;
  height: 13%;
  font-size: 9pt;
`;

const Content = styled.div`
  margin-left: 100px;
  margin-bottom: 30px;
  height: 210px;
  width: 400px;
  position: absolute;
  border: solid 1px #999;
  bottom: 0;
  border-radius: 5px;
`;

const SocialCard = styled.div`
  height: 320px;
  width: 550px;
  border: solid 1px #999;
  border-radius: 10px;
  display: flex;
  position: relative;
  font-family: sans-serif;
  line-height: 24px;
  text-justify: inter-word;
`;

const ContentPicture = styled.img`
  height: 70%;
  width: 100%;
  border-radius: 5px;
  border: solid 1px #999;
  background-color: lightgrey;
`;

const ContentHeading = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27%;
  border-radius: 5px;
`;

const ProfilePicture = styled.img`
  margin: 15px;
  height: 40px;
  border: solid 1px #999;
  border-radius: 5px 20px 5px;
  background-color: lightgrey;
`;

const Username = styled.h4`
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 0;
  height: 10%;
`;

const Handle = styled.h6`
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 0;
  height: 10%;
  color: silver;
`;

class App extends Component {
  render() {
    return (
      <SocialCard>
        <ProfilePicture src={logo} alt="logo" />
        <Username>The Practical Dev</Username>
        <Handle>@ThePracticalDev {middleDotUnicode} Sep 10</Handle>
        <UserDescription>User's description goes here...</UserDescription>
        <Content>
          <ContentPicture src={logo} alt="content" />
          <ContentHeading>
            <h4 Style="padding-left: 5px; margin: 0">
              Content Title Goes Here..
            </h4>
            <h6 Style="padding-left: 5px; margin: 0">
              Content description goes here...
            </h6>
          </ContentHeading>
        </Content>
        <Interactions href="http://www.google.com">
          Comment | Like | Share
        </Interactions>
      </SocialCard>
    );
  }
}

export default App;
