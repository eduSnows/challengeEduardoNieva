import {headerData} from "../helperData/data";
import {HeaderData} from "../interfaces/headerData";
import HeaderItem from "./HeaderItem";
import {StyledContainer} from "../styles/StyledContainer";


/**
 * StyledHeaderContainer component
 * This component is responsible for rendering the header of the dashboard
 */
const HeaderContainer = () => {

    return (
        <StyledContainer variant={'center'}>
            {headerData.map((item: HeaderData, index: number) => (
                <HeaderItem key={index} {...item}/>
            ))}
        </StyledContainer>
    );
};

export default HeaderContainer;