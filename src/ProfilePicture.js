import React, { Component } from "react";
import styled from "styled-components";

import logo from "./logo.svg";

const ProfilePicture = styled.img`
  margin: 15px;
  height: 40px;
  border: solid 1px #999;
  border-radius: 5px 20px 5px;
  background-color: lightgrey;
`;

class ProfilePic extends Component {
  render() {
    return <ProfilePicture src={logo} alt="Profile picture" />;
  }
}

export default ProfilePic;
