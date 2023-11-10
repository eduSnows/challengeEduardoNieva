import {render, screen} from "@testing-library/react";
import BodyItem from "../components/BodyItem";
import {ThemeProvider} from "styled-components";


describe('BodyItem test suites', ()=>{

    it('should render a card with title, social media icon, count and percentage', () => {
        const customTheme = {colors: { cardBG: '#ff000'}};
        const percentage = 50;
        const socialMedia = 'facebook';
        const title = 'Test Title';
        const count = '1000';

        render(
            <ThemeProvider theme={customTheme}>
                <BodyItem percentage={percentage} socialMedia={socialMedia} title={title} count={count} />
            </ThemeProvider>
                );
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByAltText(`logo-${socialMedia}`)).toBeInTheDocument();
        expect(screen.getByText(count.toString())).toBeInTheDocument();
        expect(screen.getByText(percentage)).toBeInTheDocument();
    });


})