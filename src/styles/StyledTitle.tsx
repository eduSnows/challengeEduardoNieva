import styled from "styled-components";

import {NumberStyles, TitleStyles} from "../interfaces/styles.interfaces";
import {marginVariants, sizeTextVariants,  titleVariants} from "../theme/theme";

/**
 * StyledTitle component
 * @param variant it could be 'title' or 'subtitle'
 * @param margin it could be 'none', 'xsmall','small', 'medium' or 'big'
 *
 */

export const StyledTitle = styled.h3<TitleStyles>`
  color: ${({theme}) => theme.colors.title};
  font-size: ${({variant}) => titleVariants[variant]};
  ${({margin}) => margin && `margin: ${marginVariants[margin]};`}
`

/**
 * StyledTitleNumbers component
 * @param variant it could be 'xsmall','small', 'medium' or 'big'
 * @param margin it could be 'none', 'xsmall','small', 'medium' or 'big'
 *
 *
 */
export const StyledTitleNumbers = styled.h3<NumberStyles>`
  color: ${({theme}) => theme.colors.title};
  font-size: ${({variant}) => sizeTextVariants[variant]};
  //margin: 16px 0 0;
  align-items: flex-start;

  ${({margin}) => margin && `margin: ${marginVariants[margin]} 0 0;`}
`
