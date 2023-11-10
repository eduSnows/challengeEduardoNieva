import {overviewData} from "../helperData/data";
import {Overview} from "../interfaces/headerData";
import BodyItem from "./BodyItem";
import {StyledTitle} from "../styles/StyledTitle";
import {StyledContainer} from "../styles/StyledContainer";


/**
 * This component renders the body of the dashboard
 * @constructor
 */
const BodyContainer = () => {

    return (
        <>
            <StyledContainer variant={'start'}>
                <StyledTitle variant={'subtitle'}>
                    Overview - Today
                </StyledTitle>
            </StyledContainer>
            <StyledContainer variant={'center'}>
                {overviewData.map((item: Overview, index: number) => (
                    <BodyItem key={index} {...item}/>
                ))}
            </StyledContainer>

        </>
    );
};

export default BodyContainer;