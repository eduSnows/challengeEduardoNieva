import DashboardContainer from "./pages/DashboardContainer";
import styled, {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";
import {GlobalStyles} from "./styles/Global";
import {BaseModalBackground, ModalProvider} from "styled-react-modal";
import {useTheme} from "./context/ThemeContext";


const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 3s ease-in-out;
`;


function App() {

    const {theme:selectedTheme} = useTheme()

    return (
        <>
            <ThemeProvider theme={theme[selectedTheme]}>
                <ModalProvider backgroundComponent={FadingBackground}>
                    <GlobalStyles/>
                    <DashboardContainer/>
                </ModalProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
