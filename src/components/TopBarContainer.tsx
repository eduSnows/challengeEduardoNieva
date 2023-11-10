import React from 'react';
import {StyledText} from "../styles/StyledText";
import {StyledTitle} from "../styles/StyledTitle";
import {StyledContainerColumn,StyledTopContainer} from "../styles/StyledContainer";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

const TopBarContainer = () => {
    return (
        <StyledTopContainer>
            <StyledContainerColumn variant={'start'}>
                <StyledTitle variant={'title'} margin={'none'}>
                    Social Media Dashboard
                </StyledTitle>
                <StyledText>
                    Total Followers: 23,004
                </StyledText>
            </StyledContainerColumn>

            <ToggleSwitch />
        </StyledTopContainer>
    );
};

export default TopBarContainer;