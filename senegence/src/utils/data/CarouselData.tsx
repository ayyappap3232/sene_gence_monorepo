import { images } from "../../constants"
import { IAsSeenInCarouselData, IHomeCarouselData } from "../../types"

const homeCarouselData : IHomeCarouselData[] = [
    {
        id: "hc1",
        image: images.carousel1,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc2",
        image: images.carousel2,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc3",
        image: images.carousel3,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc4",
        image: images.carousel4,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc5",
        image: images.carousel5,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc6",
        image: images.carousel6,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
    {
        id: "hc7",
        image: images.carousel7,
        buttonText: "Shop Duos",
        title: "Cream Contour And Highlight Duos",
        subTitle: "Sculpt, Perfect, define, and enhance! These creamy,blendable Duos let you contour and highlight with ease for a photo-ready look",
        overlayColor: "rgba(255,255,255,0.8)"

    },
]

const asSeenInCarouselData : IAsSeenInCarouselData[] = [
    {
        id: 1,
        image: images.shefinds
    },{
        id: 2,
        image: images.shape
    },{
        id: 3,
        image: images.parade
    },
    {
        id: 4,
        image: images.essence
    }
]

const productCategoryShippingDetailsData = [
    {
        id: 'PCSD1',
        name: "Free shipping on orders $100+",
        icon: images.truck
    },
    {
        id: 'PCSD2',
        name: "10% off Discount",
        icon: images.discount
    },
    {
        id: 'PCSD3',
        name: "Exclusive",
        icon: images.exclusive
    },
    {
        id: 'PCSD4',
        name: "Additional Kiss Credits",
        icon: images.kisscredits
    },
]

const advisoryBoardData = [
    {
        id: 'advbm1',
        image: images.BarryGilmore,
        name: 'Barry Gilmore',
        description: 'Our Advisory Board Technology Expert, is an innovative IT Business Executive who has transformed organizations on a global scale. '
    },
    {
        id: 'advbm2',
        image: images.JohnGleason,
        name: 'John Gleason',
        description: 'Our Advisory Board Technology Expert, is an innovative IT Business Executive who has transformed organizations on a global scale. '
    },
    {
        id: 'advbm3',
        image: images.VincentSerpico,
        name: 'Vincent Serpico',
        description: 'Our Advisory Board Technology Expert, is an innovative IT Business Executive who has transformed organizations on a global scale. '
    },
]

const carouselTypes = {
    VerticalTextWithImage: "VerticalTextWithImage",
    HorizontalTextWithIcon : "HorizontalTextWithIcon",
    VerticalTitleAndDescriptionTextWithImage: "VerticalTitleAndDescriptionTextWithImage"
}

export {homeCarouselData, asSeenInCarouselData,carouselTypes,productCategoryShippingDetailsData,advisoryBoardData}