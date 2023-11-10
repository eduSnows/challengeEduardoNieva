import styled from "styled-components";


export const StyledImage = styled.div`
  svg {
    z-index: 100;
    fill: ${({theme}) => theme.colors.title};
  }
`;
