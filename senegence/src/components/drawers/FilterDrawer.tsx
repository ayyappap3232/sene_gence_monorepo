import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Close} from '../../../assets/svgs';
import {COLORS, images, SIZES} from '../../constants';
import Text from '../text/Text';
import Modal from "react-native-modal";

const FilterDrawer = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  return (
    <>
      <TouchableOpacity onPress={() => showModal()}>
        <Image
          source={images.filter1}
          style={{width: 12.6, height: 12.6, marginRight: 4}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal
      deviceWidth={SIZES.width}
      style={{width: SIZES.width-120,marginLeft: 0}}
        supportedOrientations={['landscape-left']}
        presentationStyle="overFullScreen"
        animationOut="slideOutLeft"
        isVisible={visible}
        animationIn="slideInLeft">
        <View
          style={styles.sideMenu}>
          <TouchableOpacity style={{left: "90%"}} onPress={() => setVisible(!visible)}>
            <Close />
          </TouchableOpacity>
          <Text>Side Menu Content will appear here</Text>
        </View>
      </Modal>
    </>
  );
};

export default FilterDrawer;

const styles = StyleSheet.create({
    sideMenu: {
        backgroundColor: COLORS.white,
        height: SIZES.height,
        elevation: 4,
        shadowColor: COLORS.swatch,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.7,
        paddingTop: 20
      }
})
