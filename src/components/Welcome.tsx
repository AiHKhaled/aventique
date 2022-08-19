/* eslint-disable */
import React from "react";
import welcome from "../Welcome.jpg";
import { Typography, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { ChildProps } from "@/@types/ChildProps";
import "../styles/welcomeSheet.css";

const Welcome: React.FC<ChildProps> = ({ setIsLoggedIn }: ChildProps) => {
  if (setIsLoggedIn) setIsLoggedIn(false);

  const StyledLink = styled(Link)`
    display: inline-block;
    position: relative;
    color: #a9c0d1;
    font-size: 30px;
    font-weight: bold;
    margin-top: 50px;
    margin-right: 50px;
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #a9c0d1;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `;

  const Quote = styled(Stack)`
    position: absolute;
    display: flex;
    justify-items: space-between;
    align-items: center;
    top: 150px;
    right: 50%;
    transform: translate(20%, 40%);
  `;

  const Header = styled(Typography)`
    color: #ebfbea;
    font-weight: bold;
    text-align: left;
    font-size: 30px;
  `;
  return (
    <div className="container">
      <img style={{ position: "relative" }} src={welcome} alt="" />
      <Quote>
        <Header>
          “Photography for me is not looking, it’s feeling. If you can’t feel
          what you’re looking at, then you’re never going to get others to feel
          anything when they look at your pictures.” — Don McCullin
        </Header>

        <StyledLink to="/albums">Go to Albums</StyledLink>
      </Quote>
    </div>
  );
};

export default Welcome;
