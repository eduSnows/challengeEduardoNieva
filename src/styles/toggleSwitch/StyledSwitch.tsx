import styled from "styled-components";

/**
 * StyledSwitch component
 */
export  const StyledSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    right: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

