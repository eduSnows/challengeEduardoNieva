import {
    FlexVariants, gapVariants,
    marginVariants,
    OtherColors,
    paddingVariants,
    sizesVariants,
    titleVariants
} from "../Models/Models";


export interface CardStyle {
    border?: keyof OtherColors
    variant?: string
}


export interface TextStyles {
    color?: keyof OtherColors
    size?: keyof sizesVariants
    margin?: keyof marginVariants

}

export interface CardHeaderStyle {
    variant: keyof FlexVariants
    margin?: keyof marginVariants
    padding?: keyof paddingVariants
    gap?: keyof gapVariants
}

export interface TitleStyles{
    variant: keyof titleVariants
    margin?: keyof marginVariants
}
export interface NumberStyles{
    variant: keyof sizesVariants
    margin?: keyof marginVariants
}

export interface IndicatorStyles{
    margin?: keyof marginVariants
}