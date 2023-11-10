import {HeaderData} from "../interfaces/headerData";
import {StyledText,  StyledTextUpperCase} from "../styles/StyledText";
import {StyledCard, StyledCardHeader} from "../styles/StyledCard";
import {StyledTitleNumbers} from "../styles/StyledTitle";
import Indicator from "./indicator/Indicator";
import {useState} from "react";
import CustomModal from "./modal/CustomModal";

/**
 * This component renders a card with the header data and a Modal with a chart
 * @param userName
 * @param socialMedia
 * @param followers
 * @param followersToday
 * @param typeOfFollowers
 * @constructor
 */

const HeaderItem = ({userName, socialMedia, followers, followersToday, typeOfFollowers}: HeaderData) => {
    const [isOpen, setIsOpen] = useState(false)


    /**
     * This function toggles the modal
     */
    function toggleModal() {
        setIsOpen(!isOpen)
    }

    return (
        <StyledCard border={socialMedia} onClick={toggleModal}>
            <StyledCardHeader variant={'center'}>
                <img src={`./assets/images/icon-${socialMedia}.svg`} alt={`logo-${socialMedia}`}/>
                <StyledText>
                    {userName}
                </StyledText>
            </StyledCardHeader>

            <StyledTitleNumbers variant={'big'} margin={'medium'}  >
                {followers}
            </StyledTitleNumbers>

            <StyledTextUpperCase>
                {typeOfFollowers}
            </StyledTextUpperCase>
            <Indicator value={followersToday} text={'Today'} margin={'medium'}/>

           <CustomModal
                socialMedia={socialMedia}
                typeOfFollowers={typeOfFollowers}
                userName={userName}
                followers={followers}
                toggleModal={toggleModal}
                isOpen={isOpen}
            />

        </StyledCard>
    );
};

export default HeaderItem;