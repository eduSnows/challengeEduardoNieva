import {ThemeProvider} from "styled-components";
import HeaderItem from "../components/HeaderItem";
import {render, screen} from "@testing-library/react";

it('should render a card with the header data and a Modal with a chart', () => {

    const customTheme = {colors: { cardBG: '#ff000'}};



    const headerData = {
        userName: 'John Doe',
        socialMedia: 'facebook',
        followers: '1000',
        followersToday: 12,
        typeOfFollowers: 'Followers'
    };

    // Act
    render(
        <ThemeProvider theme={customTheme}>
        <HeaderItem {...headerData} />
        </ThemeProvider>);

    // Assert
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
});