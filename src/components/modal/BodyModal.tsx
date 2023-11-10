import React from 'react';
import {StyledContainer} from "../../styles/StyledContainer";
import {StyledTextThin} from "../../styles/StyledText";
import ChartContainer from "../chart/ChartContainer";


interface BodyModalProps {
    timeRange: string
}
const BodyModal = ({timeRange}:BodyModalProps) => {
    return (
        <StyledContainer variant={"center"} gap={'none'}>
            <StyledContainer variant={'start'} padding={'big'} margin={'medium'}>
                <StyledTextThin size={'small'} margin={'none'}>
                  {timeRange}
                </StyledTextThin>

            </StyledContainer>
            <ChartContainer/>
        </StyledContainer>

    );
};

export default BodyModal;