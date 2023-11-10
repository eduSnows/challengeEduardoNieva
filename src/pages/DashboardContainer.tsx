import HeaderContainer from "../components/HeaderContainer";
import BodyContainer from "../components/BodyContainer";
import TopBarContainer from "../components/TopBarContainer";
import {Container} from "../styles/StyledContainer";

const DashboardContainer = () => {
    return (

        <Container >
            <TopBarContainer />
            <HeaderContainer/>
            <BodyContainer/>
        </Container>
    );
};

export default DashboardContainer;