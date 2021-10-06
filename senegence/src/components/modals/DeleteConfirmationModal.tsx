import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import OutlineButton from '../buttons/OutlineButton';
import Spacer from '../Spacer';
import Text from '../text/Text';

export default function DeleteConfirmationModal({
  showModal,
  setShowModal,
  title,
  subTitle,
  cancelModal,
  handleDelete,
  confirmBtnText = 'YES',
  cancelBtnText = 'NO',
}: any) {
  return (
    <Modal
      style={[
        {
          width: SIZES.width - 20,
          marginHorizontal: 10,
          backgroundColor: 'transparent',
        },
      ]}
      supportedOrientations={['portrait']}
      presentationStyle="overFullScreen"
      backdropOpacity={0}
      animationOut="slideOutDown"
      isVisible={showModal}
      animationIn="slideInUp">
      <View
        style={[
          globalStyles.shadowEffect,
          {
            backgroundColor: COLORS.white,
            padding: 10,
            marginHorizontal: 20,
          },
        ]}>
        <TouchableOpacity style={{left: '95%'}} onPress={setShowModal}>
          <Image source={images.close} style={{width: 20, height: 20}} />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase', textAlign: 'center'},
            ]}>
            {title}
          </Text>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase', textAlign: 'center'},
            ]}>
            {subTitle}
          </Text>
          <Spacer mt={20} />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <OutlineButton
              title={confirmBtnText}
              containerStyle={{
                width: 68,
                marginRight: 10,
                borderColor: COLORS.primary2,
              }}
              textStyleContainer={[
                globalStyles.text_avenir_heavy,
                {color: COLORS.primary2},
              ]}
              onPress={handleDelete}
            />
            <OutlineButton
              title={cancelBtnText}
              containerStyle={{
                width: 68,
                backgroundColor: COLORS.primary2,
                borderColor: COLORS.primary2,
              }}
              textStyleContainer={[
                globalStyles.text_avenir_heavy,
                {color: COLORS.white},
              ]}
              onPress={cancelModal}
            />
          </View>
          <Spacer mt={30} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
