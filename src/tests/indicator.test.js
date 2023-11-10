import {screen, render} from "@testing-library/react";
import Indicator from "../components/indicator/Indicator";
import {ThemeProvider} from "styled-components";
import BodyItem from "../components/BodyItem";

it('should render an indicator with a positive value and no text', () => {
    const customTheme = {colors: { cardBG: '#ff000'}};

    render(
        <ThemeProvider theme={customTheme}>
            <Indicator value={10} />
        </ThemeProvider>
    )

    expect(screen.getByText('10')).toBeInTheDocument();
});