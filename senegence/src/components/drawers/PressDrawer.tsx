import * as React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Close} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Text from '../text/Text';
import Modal from 'react-native-modal';
import {Platform} from 'react-native';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import SideDrawerHeader from '../headers/SideDrawerHeader';

const PressDrawer = ({pressDrawerContentData, initialId,onScrollCallback}: any) => {
  const [visible, setVisible] = React.useState(false);
  const [isDrawerItemSelected, setIsDrawerItemSelected] = React.useState({
    id: initialId,
    isSelected: true,
  });

  const showModal = () => setVisible(true);

  const handlePressItemSelected = (item: any) => {
    setIsDrawerItemSelected({id: item.id, isSelected: true});
    setVisible(!visible);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          showModal();
        }}>
        <Image
          source={images.filter2}
          style={{
            width: 20,
            height: 14.2,
            tintColor: COLORS.text,
            alignSelf: 'flex-end',
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal
        style={{width: SIZES.width - 120, marginLeft: 0}}
        supportedOrientations={['portrait']}
        presentationStyle="overFullScreen"
        animationOut="slideOutLeft"
        isVisible={visible}
        animationIn="slideInLeft">
        <View style={styles.sideMenu}>
          <SideDrawerHeader visible={visible} setVisible={setVisible} />
          <ScrollView contentContainerStyle={{paddingLeft: 20, paddingTop: 20}}>
            {pressDrawerContentData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item.id}
                  onPress={() => {
                    handlePressItemSelected(item);
                  }}>
                  <Text
                    containerStyle={[
                      globalStyles.text_avenir_heavy,
                      {
                        fontFamily:
                          item.id === isDrawerItemSelected.id &&
                          isDrawerItemSelected.isSelected
                            ? FONTS.AvenirHeavy
                            : FONTS.AvenirBook,
                        textTransform: 'uppercase',
                        lineHeight: 24,
                        letterSpacing: 0.7,
                        paddingBottom: 20,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default PressDrawer;

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
