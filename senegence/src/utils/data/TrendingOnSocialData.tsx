import { images } from "../../constants";

export interface ITrendingOnSocialData {
    id: number;
    title?: string;
    image: any;
    subTitle?:string;
}

export const TrendingOnSocialData = [
    {
        id: 1,
        title: "Title 1",
        image: images.featureProduct1,
        subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
    },
    {
        id: 2,
        title: "Title 2",
        image: images.featureProduct1,
        subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
    },
    {
        id: 3,
        title: "Title 3",
        image: images.featureProduct1,
        subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
    },
    {
        id: 4,
        title: "Title 4",
        image: images.featureProduct1,
        subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
    },
]