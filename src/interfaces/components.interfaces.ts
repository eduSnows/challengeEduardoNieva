import {marginVariants, sizesVariants, Theme} from "../Models/Models";


export interface IndicatorProps {
    value: number;
    size?: keyof sizesVariants;
    text?: string;
    margin?: keyof marginVariants;

}

export interface CustomModalProps {

    socialMedia: string;
    typeOfFollowers: string;
    userName: string;
    followers: string;
    toggleModal: () => void;
    isOpen: boolean;

}


export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}