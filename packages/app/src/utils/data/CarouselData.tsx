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
        image: images.carousel1,
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

export {homeCarouselData, asSeenInCarouselData}