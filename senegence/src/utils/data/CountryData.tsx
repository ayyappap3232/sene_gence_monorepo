import { images } from "../../constants";

export interface ICountriesData {
    id: string;
    name: string;
    flag: any;
    data: IData[];
}

export interface IData {
    countryName: string;
    flag: any;
    languages?: Array<string>;
}

export const countriesData : ICountriesData[]= [
    {
        id: 'C1',
        name: "United States",
        flag: images.americamap,
        data: [{
            countryName: "United States",
            flag: images.america,
            languages: ["English | Español"]
        },{
            countryName: "Canada",
            flag: images.canada,
            languages: ["English | Français"]
        },{
            countryName: "Mexico",
            flag: images.mexico,
            languages: ["Español"]
        }]
    },
    {
        id: 'C2',
        name: "Asia Specific",
        flag: images.americamap,
        data: [{
            countryName: "Australia",
            flag: images.australia,
        },{
            countryName: "Indonesia",
            flag: images.indonesia,
        },{
            countryName: "New Zealand",
            flag: images.newzealand,
        },{
            countryName: "Hong Kong",
            flag: images.hongkong,
            languages: ["English | 繁體中文"]
        }]
    },
    {
        id: 'C3',
        name: "Europe",
        flag: images.europemap,
        data: [{
            countryName: "Poland",
            flag: images.poland,
        },{
            countryName: "Switzerland",
            flag: images.switzerland,
            languages: ["Deutsch | Français | English"]

        },{
            countryName: "United Kingdom",
            flag: images.unitedkingdom,
        }]
    }
]