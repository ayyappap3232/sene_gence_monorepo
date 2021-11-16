import React, {useState, useRef} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Select from 'components/select/Select';
import DistributorWrapper from './DistributorWrapper';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {COLORS, images, SIZES} from '../../../constants';
import Checkbox from 'components/checkboxs/Checkbox';
import OutlineButton from 'components/buttons/OutlineButton';

const chooseKitData = [
  {
    id: 0,
    name: 'DISTRIBUTOR ID',
  },
  {
    id: 1,
    name: 'CITY/STATE',
  },
  {
    id: 2,
    name: 'ZIP CODE',
  },
];

const distributorIDCarouselData = [
  {
    id: 0,
    image: images.freesample0,
  },
  {
    id: 1,
    image: images.freesample1,
  },
  {
    id: 2,
    image: images.freesample2,
  },
  {
    id: 3,
    image: images.freesample3,
  },
  {
    id: 4,
    image: images.freesample4,
  },
  {
    id: 5,
    image: images.freesample5,
  },
];

export default function DTab4() {
  const [changeLanguage, setChangeLanguage] = useState([
    {full_name_locale: 'English'},
  ]);

  const carouselScrollRef = useRef(0);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState(0);

  const _applicationFee = () => {
    return (
      <View>
        <Text
          containerStyle={[
            globalStyles.text_avenir_heavy,
            {textTransform: 'uppercase'},
          ]}>
          Application Fee
        </Text>
        <Text containerStyle={{color: COLORS.swatch}}>$50.00</Text>
        <Spacer mt={20} />
        <Text>
          With just a $65 USD investment, you’ll receive a New Distributor Kit
          that’ll navi- gate your new opportunity with ease and start off
          strong! Its full of business-building essentials, including a
          Checklist for Getting Started, Beauty Books, and testers of LipSense®
          shades in your choice of Deep Neutrals (Sheer Berry, Caramel Apple,
          and Bella) or Soft Neutrals (Luv It, Bombshell, and Dawn Rising). It
          also includes a free SeneSite, an e-com customizable site. Plus,
          business apps! Act now and enroll as a SeneGence Independent
          Distributor!
        </Text>
      </View>
    );
  };

  const _unorderList = (text: string) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text containerStyle={{fontSize: 24, marginTop: -8, marginRight: 10}}>
          {'\u2022'}
        </Text>
        <Text>{text}</Text>
      </View>
    );
  };

  const _distributorID = () => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={distributorIDCarouselData[selectedCarouselIndex].image}
            style={{
              width: SIZES.width - 120,
              height: 200,
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
        <Spacer mt={5} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              carouselScrollRef.current.scrollTo({
                x:  -10,
                y: 0,
                animated: true,
              });
              selectedCarouselIndex != 0 &&
              selectedCarouselIndex < distributorIDCarouselData.length
                ? setSelectedCarouselIndex(selectedCarouselIndex - 1)
                : {}
            }
            }>
            <Image
              source={images.leftChevron}
              style={{
                width: 11,
                height: 19,
                tintColor:
                  selectedCarouselIndex === 0
                    ? COLORS.border4
                    : COLORS.primary3,
              }}
            />
          </TouchableOpacity>
          <ScrollView
            ref={carouselScrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled>
            {distributorIDCarouselData.map((item, index) => {
              return (
                <TouchableOpacity
                onPress={() => setSelectedCarouselIndex(index)}
                  style={[
                    selectedCarouselIndex === index && {
                      borderWidth: 1,
                      borderColor: COLORS.primary3,
                    },
                    {margin: 20},
                  ]}>
                  <Image
                    source={item.image}
                    style={{
                      width: 80,
                      height: 75,
                      resizeMode: 'cover',
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              carouselScrollRef.current.scrollTo({
                x:  selectedCarouselIndex * 120,
                y: 0,
                animated: true,
              });
              selectedCarouselIndex < distributorIDCarouselData.length - 1
                ? setSelectedCarouselIndex(selectedCarouselIndex + 1)
                : {};
            }}>
            <Image
              source={images.rightChevron}
              style={{
                width: 11,
                height: 19,
                tintColor:
                  selectedCarouselIndex === distributorIDCarouselData.length - 1
                    ? COLORS.border4
                    : COLORS.primary3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _renderChooseKitContent = (index: number) => {
    switch (index) {
      case 0:
        return _distributorID();
      case 1:
        return (
          <View>
            <Text> City or state</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Zip Code</Text>
          </View>
        );
      default:
        break;
    }
  };

  const _chooseKit = () => {
    return (
      <View>
        <Text
          containerStyle={[
            globalStyles.text_avenir_heavy,
            {textTransform: 'uppercase'},
          ]}>
          Choose Kit
        </Text>
        {/* flatlist horizontal tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {chooseKitData.map((item, index) => {
            console.log(item.id, index);
            return (
              <TouchableOpacity
                onPress={() => setSelectedIndex(item.id)}
                style={{
                  padding: 10,
                  borderBottomWidth: 5,
                  borderBottomColor:
                    item.id == selectedIndex ? COLORS.primary4 : COLORS.border4,
                }}>
                <Text containerStyle={{}}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Spacer mt={10} />
        {_renderChooseKitContent(selectedIndex)}
        {/* image slider */}
        <Spacer mt={30} />
        <Text>
          Are neutrals more your go-to color, or know some peeps who go for the
          sheer & natural simplicity look? Then Deep Neutrals NDS is the right
          choice for you!
        </Text>
        <Spacer mt={20} />
        {_unorderList('Sheer Berry: A berry purple with sheer matte finish')}
        <Spacer mt={20} />
        {_unorderList('Caramel Apple: A cool, frosty rosy red')}
        <Spacer mt={20} />
        {_unorderList('Bella: A creamy brown/mauve with a matte finish')}
      </View>
    );
  };

  return (
    <DistributorWrapper>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        {/* change language dropdown  */}
        <Select
          defaultButtonText={'CHANGE LANGUAGE'}
          data={changeLanguage}
          setSelectedValue={setChangeLanguage}
          containerButtonStyle={{width: 200}}
        />
        {/* application fee */}
        <Spacer mt={15} />
        {_applicationFee()}
        <Spacer mt={30} />
        {/* choose kit tabs */}
        {_chooseKit()}
        <Spacer mt={30} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Checkbox />
          <Text containerStyle={{marginLeft: 10}}>I want this kit</Text>
        </View>
        <Spacer mt={32} />
        <View style={[globalStyles.row]}>
          <OutlineButton
            title={'Back'}
            containerStyle={[
              globalStyles.bannerBtnBlueOutline,
              {width: 76, height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextBlue]}
            onPress={() => {}}
          />
          <OutlineButton
            title={'Continue'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 89, height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
