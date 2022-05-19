import React from "react";
import {
  About,
  Container,
  Image,
  ImageColumn,
  ImageContainer,
  ImageText,
  ImageWrapper,
  Title,
} from "./styled";

const AboutComponent = () => {
  return (
    <Container>
      <About>
        <Title>Tentang Kami</Title>
        <ImageContainer>
          <ImageWrapper>
            <Image src="/assets/dafid.jpg" alt="about" />
            <ImageText>Dafid Palevi</ImageText>
          </ImageWrapper>
          <ImageColumn>
            <ImageWrapper mr="6em">
              <Image src="/assets/reza.jpg" alt="about" />
              <ImageText>Reza Pohan</ImageText>
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/assets/fadlan.jpg" alt="about" />
              <ImageText>Fadlan</ImageText>
            </ImageWrapper>
          </ImageColumn>
        </ImageContainer>
      </About>
    </Container>
  );
};

export default AboutComponent;
