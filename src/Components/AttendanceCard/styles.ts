import styled from "styled-components";

export const Card = styled.div`
  width: 330px;
  height: 250px;
  > div {
    background-color: #30a7a0;
  }

  @media (min-width: 480px) {
    height: 230px;
  }
`;
