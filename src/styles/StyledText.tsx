import styled from "styled-components";

import {TextStyles} from "../interfaces/styles.interfaces";

import {marginVariants, otherColors, sizeTextVariants} from "../theme/theme";


/**
 * This the main component is used to render a text
 * @param size - Optional - a string that represents the size of the text (it must be a size from the theme)
 * @param nomargin - Optional - a boolean that indicates if the text has margin or not
 *
 */
export const StyledText = styled.span<TextStyles>`
  color: ${({theme}) => theme.colors.text};
  font-weight: 700;
  font-size: ${({size}) => size === undefined
          ? sizeTextVariants['xsmall']
          : sizeTextVariants[size]};
  
  ${({margin}) => margin && `margin: ${marginVariants[margin]} 0;`}
`

/**
 * This component render a text with uppercase, weight 400 and size 1rem
 */
export const StyledTextUpperCase = styled(StyledText)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.25rem;
  margin-top: 0;
`

/**
 * This component is used to render a text with a color
 * @param color - Optional - a string that represents the color of the text (it must be a color from the theme)
 * @param size - Optional - a string that represents the size of the text
 */
export const StyleTextColored = styled(StyledText)`
  color: ${({color, theme}) => color ? otherColors[color] : theme.colors.text};
`

/**
 * This component is used to render a text thin(300) and small
 */
export const StyledTextThin = styled(StyledText)`

  color: ${({color,theme}) => color ? otherColors[color] : theme.colors.text};
  font-weight: 300;
`
