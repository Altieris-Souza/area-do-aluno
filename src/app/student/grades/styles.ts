import styled from "styled-components";

export const Container = styled.div`
  > div {
    width: 90%;
    min-height: 75%;
    background-color: #30a7a0;
  }

  @media (min-width: 768px) {
    height: 90vh;
  }
`;

export const SelectContainer = styled.select`
  width: 90%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const CardsContainer = styled.div`
  width: 90%;
  ::after {
    content: "";
    flex: auto;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;
