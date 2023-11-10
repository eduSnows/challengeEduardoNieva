import {OtherColors} from "../Models/Models";


export interface HeaderData {
    userName: string;
    followers: string;
    typeOfFollowers: string;
    followersToday: number;
    socialMedia: keyof OtherColors;
}


export interface Overview {
    title: string;
    socialMedia: keyof OtherColors;
    count: string;
    percentage: number;
}
