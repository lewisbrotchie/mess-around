import React, { Component } from "react";
import styled from "styled-components";

import ProfilePicture from "./ProfilePicture";
import logo from "./logo.svg";

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
  line-height: 1.5;
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
  margin: 10px;
`;

const ContentPicture = styled.img`
  height: 70%;
  width: 99.5%;
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

const ContentTitle = styled.h4`
  padding-left: 5px;
  margin: 0;
`;

const ContentDescription = styled.h6`
  padding-left: 5px;
  margin: 0;
  line-height: 1.2;
`;
const ActionButton = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 1em;
  margin: 0 1em;
  background: lightgray;
  color: black;
  border: solid 2px #999;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Lewigi",
      handle: "@Lewigi",
      date: "Apr 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      contenttitle: "Lorem Ipsum",
      imageUrl: "",
      UrlInputted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangeURL(e) {
    this.setState({ imageUrl: e.target.value });
  }

  handleClick() {
    this.setState({ UrlInputted: true });
  }

  render() {
    const UrlInputted = this.state.UrlInputted;
    return (
      <div>
        <SocialCard>
          <ProfilePicture />
          <Username>{this.state.username}</Username>
          <Handle>
            {this.state.handle + " " + middleDotUnicode + " " + this.state.date}
          </Handle>
          <UserDescription>{this.state.description}</UserDescription>
          <Content>
            {UrlInputted ? (
              <ContentPicture src={this.state.imageUrl} alt="content" />
            ) : (
              <ContentPicture src={logo} alt="content" />
            )}
            <ContentHeading>
              <ContentTitle>{this.state.contenttitle}</ContentTitle>
              <ContentDescription>{this.state.description}</ContentDescription>
            </ContentHeading>
          </Content>
          <Interactions href="#">Comment | Like | Share</Interactions>
        </SocialCard>
        <div>
          <input placeholder="New Username" onChange={this.handleChange} />
        </div>
        <br /> <br />
        <div>
          <input
            type="text"
            placeholder="New Image URL"
            onChange={this.handleChangeURL}
          />
          <ActionButton
            type="button"
            onClick={this.handleClick}
            value="Submit"
          />
        </div>
      </div>
    );
  }
}

export default App;
