import React from 'react';
import {StyledTitle} from "../../styles/StyledTitle";
import {StyledText, StyledTextThin} from "../../styles/StyledText";
import {StyledCardHeader} from "../../styles/StyledCard";
import {
    StyledContainer,
    StyledContainer25,
    StyledContainerColumn,
    StyledHeaderModalContainer
} from "../../styles/StyledContainer";
import Indicator from "../indicator/Indicator";

const HeaderModal = ({socialMedia, typeOfFollowers, userName, followers, toggleModal}: any) => {
    return (
        <StyledHeaderModalContainer variant={'center'}>
            <StyledContainer variant={'between'}>
                <StyledContainerColumn variant={'start'}>
                    <StyledTitle variant={'subtitle'} margin={'none'}>{`${socialMedia} ${typeOfFollowers}`}</StyledTitle>
                    <StyledCardHeader variant={'start'}>
                        <img src={`./assets/images/icon-${socialMedia}.svg`} alt={`logo-${socialMedia}`}/>
                        <StyledText>
                            {userName}
                        </StyledText>
                    </StyledCardHeader>
                </StyledContainerColumn>

                <div onClick={toggleModal}>

                        <img src={"./assets/images/close.svg"} alt={`close button`} />

                </div>
            </StyledContainer>
            <StyledContainer variant={'start'}>
                <StyledContainer25 variant={'start'}>
                    <StyledText size={'medium'} margin={'none'}>
                        {followers}
                    </StyledText>
                    <StyledTextThin  margin={'none'}>
                        Total <br/>
                        {typeOfFollowers}
                    </StyledTextThin>
                </StyledContainer25>
                <StyledContainer25 variant={'start'}>
                    <Indicator value={81} size={'medium'} margin={'none'} />
                    <StyledTextThin  margin={'none'}>
                        New {typeOfFollowers} in the past 10 days
                    </StyledTextThin>
                </StyledContainer25>
                <StyledContainer25 variant={'start'}>
                    <Indicator value={12} size={'medium'} margin={'none'}/>
                    <StyledTextThin  margin={'none'}>
                        New {typeOfFollowers} TODAY
                    </StyledTextThin>
                </StyledContainer25>
            </StyledContainer>

        </StyledHeaderModalContainer>
    );
};

export default HeaderModal;