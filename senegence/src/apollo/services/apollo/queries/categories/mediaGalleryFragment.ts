import {gql} from '@apollo/client'

export const MEDIA_GALLERY_FRAGMENT = gql`
    fragment MediaGallery on ProductInterface{
  media_gallery{
    disabled
    label
    position
    url
  }
}
`

export type MediaGalleryItemType = {
    disabled: boolean,
    label: string,
    position: number,
    url: string
}