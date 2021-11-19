import * as React from 'react';
import { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';

//User defined Imports
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Divider from '../dividers/Divider';
import SideDrawerHeader from '../headers/SideDrawerHeader';
import Spacer from '../Spacer';

const Drawer = ({children, hamburgermenu, isVisible,setIsVisible}: any) => {
  const [isDrawerItemSelected, setIsDrawerItemSelected] = React.useState({
    isSelected: true,
  });



  const showModal = () => setIsVisible(false);

  return (
    <>
      <Modal
        style={{width: SIZES.width-120, marginLeft: 120}}
        supportedOrientations={['portrait']}
        presentationStyle="overFullScreen"
        animationOut="slideOutRight"
        isVisible={isVisible}
        animationIn="slideInRight">
        <View style={styles.sideMenu}>
          <TouchableOpacity
            onPress={() => {
              showModal();
            }}>
            <Image
              source={hamburgermenu}
              style={{
                width: 36,
                height: 36,
                tintColor: COLORS.text,
                alignSelf: 'flex-end',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Spacer mt={10}/>
          <Divider width={SIZES.width-120} height={4} backgroundColor={COLORS.border}/>
          <ScrollView contentContainerStyle={{paddingLeft: 20, paddingTop: 20}}>
            {children}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  sideMenu: {
    backgroundColor: COLORS.white,
    height: SIZES.height,
    elevation: 4,
    shadowColor: COLORS.swatch,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.7,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
});
