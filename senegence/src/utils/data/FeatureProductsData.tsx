import { images } from "../../constants";

export interface IFeatureProductsData {
    id: number;
    name?: string;
    image: any;
}

export const featureProductsData = [
    {
        id: 1,
        name: "lip sense",
        image: images.featureProduct1
    },
    {
        id: 2,
        name: "Hair balance Serum",
        image: images.featureProduct2
    },
    {
        id: 3,
        name: "Edition! AMore - Limited",
        image: images.featureProduct3
    }
]