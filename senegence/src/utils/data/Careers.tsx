import { ImageSourcePropType } from "react-native";
import { images } from "../../constants";

export interface ICareersData {
    id: string;
    image: ImageSourcePropType;
    title: string;
    description: string;
}

export const careersData = [
    {
        id: 'CD1',
        image: images.careeronyourtermscareer,
        title: "Carrier on your terms",
        description: "Work anytime, anywhere! As your own boss, you set your own schedule. Work full-time, just a few hours a week, virtually, or in-person – the choice is yours."
    },
    {
        id: 'CD2',
        image: images.additionalincomecareer,
        title: "ADDITIONAL INCOME",
        description: "With 20-50% retail profit earnings, we offer a plan that works for you."
    },
    {
        id: 'CD3',
        image: images.innovativeproductscareer,
        title: "INNOVATIVE PRODUCTS",
        description: "You’ll not only have access to amazing products that really work, you’ll also have the ability to share these products and earn retail profits from your sales - so you can fall in love before offering them to your Customer-base."
    },
    {
        id: 'CD4',
        image: images.noinventoryrequiredcareer,
        title: "NO INVENTORY REQUIRED",
        description: "You decide how much inventory you want. Purchase and resell products for a profit or direct your Customers to purchase products online."
    },
    {
        id: 'CD5',
        image: images.toolsforsuccesscareer,
        title: "TOOLS FOR SUCCESS",
        description: "You’re never alone! We provide extensive training, FREE personal website, marketing materials, exciting Hostess rewards, customized business apps, and more. "
    },
    {
        id: 'SAB6',
        image: images.worklifebalancecareer,
        title: "WORK/LIFE BALANCE",
        description: "Get the best of both worlds! You don’t have to choose between your professional and personal life – you have balance."
    },
    {
        id: 'CD7',
        image: images.exclusiveopportunitycareer,
        title: "EXCLUSIVE OPPORTUNITIES",
        description: "Have the potential to earn travel to exotic locations, earn an allowance to lease a new car, see your name in monthly newsletters, and more."
    },
    {
        id: 'CD8',
        image: images.sisterhoodcareer,
        title: "SISTERHOOD",
        description: "Joining a community of support and solidarity! Make lifelong friends in our positive, family-centered culture."
    },
]