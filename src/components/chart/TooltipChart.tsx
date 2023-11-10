import React from 'react';
import {StyledTextThin} from "../../styles/StyledText";
import { theme} from "../../theme/theme";
import {OtherColors} from "../../Models/Models";

const TooltipChart = ({ active, payload }:any) => {

    const color :keyof OtherColors = 'chart';

    if (active && payload && payload.length) {
        return (
            <div style={{
                border: `${theme.light.colors.text} solid 1px`,
                padding: '0.25rem'


            }}>
               <StyledTextThin color={color}>
                   {` ${payload[0].value} new followers`}
               </StyledTextThin>
            </div>
        );
    }

    return null;
};

export default TooltipChart;