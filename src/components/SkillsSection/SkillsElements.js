import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  background: #0c0c0c;
  color: #f2f2f2;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const SkillsCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 15vh;
  height: 15vh;
  margin: 20px;
  padding: 20px;
  background: #0c0c0c;
  box-shadow: 5px 5px 10px #050505, -5px -5px 10px #131313;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const SkillsH1 = styled.h1`
  padding: 10px;
  font-size: 3rem;
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

export const SkillsH2 = styled.h2`
  padding: 10px;
  font-size: 3rem;
  color: #f2f2f2;
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
