import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Close} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {IAboutUsData} from '../../utils/data/AboutUsData';
import {ScreenNames} from '../../utils/screenNames';
import Spacer from '../Spacer';
import Text from '../text/Text';

export default function CardWithImageTextAndButton({item, width= 334, height= 300,numberOfLinesOfTitle, numberOfLinesOfDescription, isEllipses=false} : any) {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);
  // const [isVisibleDescription, setIsVisibleDescription] = useState({id: 1, visible: false})
  const handleOnPress = () => {
    setModalVisible(true);
  };

  const _headerContent = () => {
    return (
      <>
        <Image
          source={item.image}
          style={{width: width, height: height, marginBottom: 20}}
        />
        <Spacer mb={20} />
        <View style={{marginRight: 23, marginLeft: 28}}>
          <Text
            numberOfLines={numberOfLinesOfTitle}
            containerStyle={[
              styles.commonText,
              {fontFamily: FONTS.AvenirBlack},
            ]}>
            {item.title}
          </Text>
          <Text
            numberOfLines={numberOfLinesOfDescription}
            containerStyle={[
              styles.commonText,
              {fontFamily: FONTS.AvenirBook},
            ]}>
            {item.designation}
          </Text>
        </View>
        <Spacer mb={10} />
      </>
    );
  };

  const _modalContent = () => {
    return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
    <View
      style={{
        marginVertical: 30,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 4,
        height: SIZES.height - 80,
        marginHorizontal: 15,
        shadowColor: COLORS.swatch,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.7

      }}>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 24,marginTop: 24}}
        onPress={() => setModalVisible(false)}>
        <Image
          source={images.close}
          style={{width: 30, height: 30, tintColor: COLORS.text}}
        />
      </TouchableOpacity>
      {_headerContent()}
      <ScrollView contentContainerStyle={{marginBottom: 30}}>
        <Text containerStyle={{marginHorizontal: 10,marginVertical: 20}}>
          {item.description}
        </Text>
      </ScrollView>
    </View>
  </Modal>
  }

  return (
    <View style={[styles.container,{width: width}]}>
      {_headerContent()}

      <TouchableOpacity onPress={handleOnPress}>
        <Text containerStyle={styles.readMore}>Read More</Text>
      </TouchableOpacity>
      <Spacer mb={18} />

      {_modalContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  commonText: {
    fontSize: SIZES.body2,
    lineHeight: 24,
    letterSpacing: 0.36,
    color: COLORS.text,
  },
  readMore: {
    fontFamily: FONTS.AvenirMedium,
    fontSize: SIZES.body2,
    lineHeight: 26,
    letterSpacing: 0.36,
    color: COLORS.primary2,
    marginLeft: 28,
  },
});
