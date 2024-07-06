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

export const SelectContainer = styled.select``;

export const CardsContainer = styled.div`
  ::after {
    content: "";
    flex: auto;
  }
`;
