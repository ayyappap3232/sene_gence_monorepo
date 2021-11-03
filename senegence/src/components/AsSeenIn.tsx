import React from 'react'
import { StyleSheet, View } from 'react-native'

//User defined Imports
import { asSeenInCarouselData } from 'utils/data/CarouselData';
import PlainCarousel from './carousels/PlainCarousel';
import Spacer from './Spacer';
import TextWithUnderLine from './text/TextWithUnderLine';

export default function AsSeenIn() {
        return (
          <>
            <TextWithUnderLine title="As Seen In"/>
            <Spacer mt={20} />
            <PlainCarousel carouselData={asSeenInCarouselData} />
          </>
        );
}

const styles = StyleSheet.create({})
