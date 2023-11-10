import {StyledSwitch} from "./StyledSwitch";
import styled from "styled-components";


/**
 * StyledInput component
 */
export const StyledInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${StyledSwitch} {
    background: ${({theme}) => theme.colors.toggle};

    &:before {
      transform: translate(-32px, -50%);
    }
  }
`;

