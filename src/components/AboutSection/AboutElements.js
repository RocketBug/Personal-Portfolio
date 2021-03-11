import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 95vh;
  background: #f2f2f2;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const AboutMeImg = styled.img`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 50vh;
    height: 50vh;
  }
`;

export const AboutMeContent = styled.div`
  width: 50%;
  padding: 40px;
  border-radius: 30px;
  background: #f2f2f2;
  box-shadow: 41px 41px 82px #cecece, -41px -41px 82px #ffffff;

  @media screen and (max-width: 768px) {
    width: 75%;
    border-radius: 20px;
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 75%;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const AboutMeH1 = styled.h1`
  font-size: 3rem;
  color: #0c0c0c;
  text-align: start;
  line-height: 4rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const AboutMeH2 = styled.h2``;

export const AboutMeP = styled.p`
  font-size: 1.25rem;
  color: #0c0c0c;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
