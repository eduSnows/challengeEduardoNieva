import React from 'react';
import { StyleTextColored} from "../../styles/StyledText";
import {IndicatorProps} from "../../interfaces/components.interfaces";
import {StyledIndicator, StyledLogoIndicator} from "../../styles/StyledIndicator";


/**
 * This component renders an indicator with a value and a text
 * @param value a number that represents the value of the indicator, it could be positive or negative
 * @param text - Optional - a string that represents the text of the indicator
 * @param size - Optional - a string that represents the size of the indicator
 * @param nomargin - Optional - a boolean that indicates if the indicator has margin or not
 * @constructor
 */
const Indicator = ({value, text, size = 'xsmall', margin }:IndicatorProps) => {

    /**
     *This function returns a boolean value that indicates if the
     * value is positive or negative, also it is used to get the name of the logo
     * and the indicator color
     */

    const valueIsUp = value > 0;
    const logoName = valueIsUp ? 'up' : 'down';
    const color = valueIsUp ? 'limeGreen' : 'brightRed';


    return (
        <StyledIndicator margin={margin}>
            <StyledLogoIndicator
                src={`./assets/images/icon-${logoName}.svg`}
                alt={`icon with value ${logoName}`}
           />
            <StyleTextColored color={color} size={size} >
                {value}
            </StyleTextColored>
            {text && <StyleTextColored color={color} size={size} margin={margin}>{ ` ${text}`}</StyleTextColored>}
        </StyledIndicator>
    );
};

export default Indicator;