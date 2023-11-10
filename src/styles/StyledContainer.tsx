import styled from "styled-components";
import {CardHeaderStyle} from "../interfaces/styles.interfaces";
import {flexVariants, gapVariants, marginVariants, paddingVariants} from "../theme/theme";

/**
 * This component renders a container with uneven padding on the sides
 */
export const Container = styled.div`
  padding: 3rem 6.1rem;
`


/**
 * This component renders a container
 * @param variant - Optional - a string that indicates the flex direction.
 * It could be one of the following values: *'between', 'start', 'end'*
 * @param gap - Optional - a string that indicates the gap between the elements of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param margin - Optional - a string that indicates the margin of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param padding - Optional - a string that indicates the padding of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 *
  */
export const StyledContainer = styled.div<CardHeaderStyle>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  padding: 1rem 0;
  box-sizing: border-box;

  justify-content: ${({variant}) => flexVariants[variant]};

  @media (max-width: 768px) {
    gap: ${gapVariants['small']};
  }
  gap: ${({gap}) => gap ? ` ${gapVariants[gap]}` : `${gapVariants['big']}`};

  ${({margin}) => margin && `margin: ${marginVariants[margin]};`}
  ${({padding}) => padding && `padding: 0 ${paddingVariants[padding]};`}
`

/**
 * This component renders the top container of the dashboard
 * @param variant - Optional - a string that indicates the flex direction.
 * It could be one of the following values: *'between', 'start', 'end'*
 * @param gap - Optional - a string that indicates the gap between the elements of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param margin - Optional - a string that indicates the margin of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param padding - Optional - a string that indicates the padding of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 */
export const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  &:before {
    content: '';
    width: 100%;
    height: 35%;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 0 0 12px 12px;
    background-color: ${({theme}) => theme.colors.topBGPattern};
    position: absolute;

  }
`

/**
 * This component renders a container as a column
 * @param variant - Optional - a string that indicates the flex direction.
 * It could be one of the following values: *'between', 'start', 'end'*
 * @param gap - Optional - a string that indicates the gap between the elements of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param margin - Optional - a string that indicates the margin of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param padding - Optional - a string that indicates the padding of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 */
export const StyledContainerColumn = styled.div<CardHeaderStyle>`
  display: flex;
  flex-direction: column;
  justify-content: ${({variant}) => flexVariants[variant]};
`


/**
 * This component renders  the header in the card modal
 * @param variant - Optional - a string that indicates the flex direction.
 * It could be one of the following values: *'between', 'start', 'end'*
 * @param gap - Optional - a string that indicates the gap between the elements of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param margin - Optional - a string that indicates the margin of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param padding - Optional - a string that indicates the padding of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 */
export const StyledHeaderModalContainer = styled(StyledContainer)`

  gap: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.topBGPattern};
  padding: 2rem 3rem 0;
}

`

/**
 * This component renders a container with 25% width
 * @param variant - Optional - a string that indicates the flex direction.
 * It could be one of the following values: *'between', 'start', 'end'*
 * @param gap - Optional - a string that indicates the gap between the elements of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param margin - Optional - a string that indicates the margin of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 * @param padding - Optional - a string that indicates the padding of the container.
 * It could be one of the following values: *'none, 'xsmall','small', 'medium', 'big'*
 */
export const StyledContainer25 = styled(StyledContainer)`
  width: 190px;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: flex-start;
  padding: 0;
`