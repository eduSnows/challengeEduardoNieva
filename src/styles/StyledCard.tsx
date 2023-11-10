import styled from "styled-components";

import {CardHeaderStyle, CardStyle} from "../interfaces/styles.interfaces";

import {flexVariants, otherColors} from "../theme/theme";


/**
 * Styled-Component for Card
 * @param border - top border color for card component it could be one of the
 * following values: 'facebook', 'twitter', 'instagram', 'youtube'
 * @param variant - it could be 'body' or 'header' by defaults
 */
export const StyledCard = styled.div<CardStyle>`
  animation: all 0.5s ease-in-out;
  background-color: ${({theme}) => theme.colors.cardBG};
  border-radius: 4px;
  cursor: pointer;
  width: 15.125rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.variant === 'body' ? ' ' : 'center'};;
  border-top: ${(props) => props.border
          ? `5px solid ${(otherColors[props.border])}`
          : 'none'

  };

  @media (max-width: 390px) {
    width: 15.5rem;
  };

  &:hover {
    background-color: ${({theme}) => theme.colors.cardBGHover};
  }
`
/**
 * Styled-Component for Card Header
 * @param variant - it could be one of the following values: 'between', 'center'
 */
export const StyledCardHeader = styled.div<CardHeaderStyle>`
  display: flex;
  align-content: center;
  justify-content: ${({variant}) => flexVariants[variant]};
  gap: 8px;
  margin-top: 16px;
  font-size: 0.85rem;

`
/**
 * Styled-Component for Row
 */
export const StyledCardRow = styled.div<CardHeaderStyle>`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: ${({variant}) => flexVariants[variant]};
  padding: 1rem 1rem 0;
`
