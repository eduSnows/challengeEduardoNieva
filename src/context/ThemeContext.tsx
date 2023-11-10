import { createContext, useContext, useState, ReactNode } from 'react';
import {ThemeContextType} from "../interfaces/components.interfaces";
import {Theme} from "../Models/Models";

/**
 * Custom theme context used to toggle between light and dark mode
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook to access the theme context
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe utilizarse dentro de un ThemeProvider');
    }
    return context;
}

export const  CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
