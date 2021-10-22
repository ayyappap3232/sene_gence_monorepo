import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Astrick from '../../../components/Astrick';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Error from '../../../components/errors/Error';
import Select from '../../../components/select/Select';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {_inputItem} from '../../../components/textInputs/InputItemWithAsterik';
import OutlineTextInput from '../../../components/textInputs/OutlineTextInput';
import OutlineTextInputMultiline from '../../../components/textInputs/OutlineTextInputMultiline';
import {COLORS} from '../../../constants';

export default function ContactUsForm() {
  const needInformationData = [
    {
      full_name_locale: 'An existing order',
    },
    {
      full_name_locale: 'Placing an order',
    },
    {
      full_name_locale: 'Product question',
    },
    {
      full_name_locale: 'Information on becoming an independent business owner',
    },
    {
      full_name_locale: 'Information on becoming a preferences customer',
    },
  ];

  const heardAboutSenegenceData = [
    {
      full_name_locale: 'From a Distributor',
    },
    {
      full_name_locale: 'From a Friend',
    },
    {
      full_name_locale: 'From social media',
    },
    {
      full_name_locale: 'From Miss USA',
    },
    {
      full_name_locale: 'From another source',
    },
  ];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [needInformation, setNeedInformation] = useState('');
  const [heardAboutSenegence, setHeardAboutSenegence] = useState('');
  const [comments, setComments] = useState('');

  const [error, setError] = useState({
    fullName: '',
    email: '',
    phone: '',
    needInformation: '',
    heardAboutSenegence: '',
    comments: '',
  });

  const errorText = 'This is a required field';

  const _checkValidations = () => {
    if (fullName === '') {
      setError({...error, fullName: errorText});
    }
    else if (email === "") {
      setError({...error, email: errorText});
    }
    else if (phone === '') {
      setError({...error, phone: errorText});
    }
    else if (needInformation === '') {
      setError({...error, needInformation: errorText});
    }
    else if (heardAboutSenegence === '') {
      setError({...error, heardAboutSenegence: errorText});
    }
    else if (comments === '') {
      setError({...error, comments: errorText});
    }

    if (
      (error.fullName || error.email || error.phone || error.needInformation) ||
      error.heardAboutSenegence ||
      error.comments
    ) {
      return false;
    }

    return true;
  };

  const handleContactUsForm = () => {
    // check the mandatory fields
    const verify = _checkValidations();
    console.log('verified', verify);
  };

  return (
    <View style={{marginLeft: 33, marginRight: 29}}>
      {_inputItem(
        'Full Name',
        (text: any) => {
          setError({...error, fullName: ''})
          setFullName(text);
        },
        'Enter Your Full Name',
        true,
        false,
        fullName,
      )}
      <Error errorMessage={error.fullName}/>
      {_inputItem(
        'Email',
        (text: any) => {
          setError({...error, email: ''})
          setEmail(text);
        },
        'Enter Your Email...',
        true,
        false,
        email,
      )}
      <Error errorMessage={error.email}/>
      {_inputItem(
        'Phone',
        (text: any) => {
          setError({...error, phone: ''})
          setPhone(text);
        },
        'Enter Your Phone...',
        true,
        false,
        phone,
        'phone-pad',
      )}
      <Error errorMessage={error.phone}/>

      <Select
        setSelectedValue={setNeedInformation}
        selectedValue={needInformation}
        data={needInformationData}
        title={'I need information on'}
        isMandatory={true}
        defaultButtonText={'Please Select'}
      />
      <Error errorMessage={error.needInformation}/>

      <Spacer mt={10} />
      <Select
        setSelectedValue={setHeardAboutSenegence}
        selectedValue={heardAboutSenegence}
        data={heardAboutSenegenceData}
        title={'I heard about SeneGence'}
        isMandatory={true}
        defaultButtonText={'Please Select'}
      />
      <Error errorMessage={error.heardAboutSenegence}/>

      <Spacer mt={10} />
      {_inputItem(
        "What's on your mind?",
        (text: any) => {
          setError({...error, comments: ''})
          setComments(text);
        },
        'Write Your Comments ',
        true,
        true,
        comments,
      )}
      <Error errorMessage={error.comments}/>

      <Spacer mt={30.2} />
      <OutlineButton
        textStyleContainer={{color: COLORS.white}}
        title={'SUBMIT'}
        containerStyle={{
          alignSelf: 'center',
          width: 100,
          backgroundColor: COLORS.footerColor,
          borderColor: COLORS.footerColor,
        }}
        onPress={() => handleContactUsForm()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
