import {Overview} from "../interfaces/headerData";
import {StyledCard,  StyledCardRow} from "../styles/StyledCard";
import {StyledText} from "../styles/StyledText";
import Indicator from "./indicator/Indicator";
import {StyledTitleNumbers} from "../styles/StyledTitle";

/**
 * BodyItem component
 * @param percentage - percentage of growth
 * @param icon - it could be one of the following values: 'facebook', 'twitter', 'instagram', 'youtube'
 * @param title - title of the card
 * @param count - number of followers
 * @constructor
 */
const BodyItem = ({percentage, socialMedia, title, count  }:Overview) => {



    return (
        <StyledCard variant={'body'} >
            <StyledCardRow variant={'between'}>
                <StyledText margin={'none'}>
                    {title}
                </StyledText>
                <img src={`./assets/images/icon-${socialMedia}.svg`} alt={`logo-${socialMedia}`}/>
            </StyledCardRow  >
            <StyledCardRow variant={'between'}>
                <StyledTitleNumbers variant={'medium'} margin={'none'}>
                    {count}
                </StyledTitleNumbers>
                <Indicator value={percentage} text={'%'}/>
            </StyledCardRow>
        </StyledCard>
    );
};

export default BodyItem;