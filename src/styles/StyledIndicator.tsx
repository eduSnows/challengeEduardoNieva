import styled from "styled-components";
import {IndicatorStyles} from "../interfaces/styles.interfaces";
import {marginVariants} from "../theme/theme";

/**
 * This component renders an image within the indicator component
 *
 */
export const StyledLogoIndicator = styled.img`
  width: 8px;
  height: 4px;
`

/**
 * This component renders an indicator with a value and a text
 * @param nomargin - Optional - a boolean that indicates if the indicator has margin or not
 *  ${({nomargin}) => nomargin ? 'margin: 0;!important': 'margin-top: 1rem'} ;
 */
export const StyledIndicator = styled.div<IndicatorStyles>`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  ${({margin}) => margin && `margin-top: ${marginVariants[margin]}};`} ;
`
