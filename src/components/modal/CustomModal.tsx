import HeaderModal from "./HeaderModal";
import {StyledModal} from "../../styles/modal/StyledModal";
import BodyModal from "./BodyModal";
import {CustomModalProps} from "../../interfaces/components.interfaces";

/**
 * This component renders a modal with a chart
 * @param socialMedia - The social media name
 * @param typeOfFollowers - The type of followers
 * @param userName - The user name
 * @param followers - The number of followers
 * @param toggleModal - The function to toggle the modal
 * @param isOpen - The state of the modal
 * @constructor
 */
const CustomModal = ({socialMedia, typeOfFollowers, userName, followers, toggleModal, isOpen}: CustomModalProps) => {

    return (
        <StyledModal
            isOpen={isOpen}>

            <HeaderModal
                socialMedia={socialMedia}
                typeOfFollowers={typeOfFollowers}
                userName={userName}
                followers={followers}
                toggleModal={toggleModal}
            />

            <BodyModal timeRange={'May 4 - May 13'}/>
        </StyledModal>

    );
};

export default CustomModal;