import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

//User defined Imports
import OutlineButton from '../../../components/buttons/OutlineButton';
import Error from '../../../components/errors/Error';
import Select from '../../../components/select/Select';
import Spacer from '../../../components/Spacer';
import {_inputItem} from '../../../components/textInputs/InputItemWithAsterik';
import {COLORS} from '../../../constants';
import {Formik} from 'formik';
import * as Yup from 'yup';

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

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    needInformation: '',
    heardAboutSenegence: '',
    comments: '',
  };

  const [needInformation, setNeedInformation] = useState('');
  const [heardAboutSenegence, setHeardAboutSenegence] = useState('');

  const errorText = 'This is a required field';
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ContactUsValidationSchema = Yup.object().shape({
    //Example of Formik yup validations
    // firstName: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
    //  lastName: Yup.string()
    //    .min(2, 'Too Short!')
    //    .max(50, 'Too Long!')
    //    .required('Required'),
    //  email: Yup.string().email('Invalid email').required('Required'),
    fullName: Yup.string().required(errorText),
    email: Yup.string().email('Invalid Email').required(errorText),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(8)
      .required(errorText),
    comments: Yup.string().required(errorText),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactUsValidationSchema}
      onSubmit={values => {
        (values.needInformation = needInformation),
          (values.heardAboutSenegence = heardAboutSenegence);
      }}>
      {({
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        const _errorHandler = (state: any) => {
          if (state === '') {
            return true;
          } else {
            return false;
          }
        };
        return (
          <View style={{marginLeft: 33, marginRight: 29}}>
            {_inputItem(
              'Full Name',
              handleChange('fullName'),
              'Enter Your Full Name',
              true,
              false,
              values.fullName,
            )}
            {errors.fullName && touched.fullName ? (
              <Error errorMessage={errors.fullName} />
            ) : null}

            {_inputItem(
              'Email',
              handleChange('email'),
              'Enter Your Email...',
              true,
              false,
              values.email,
            )}
            {errors.email && touched.email ? (
              <Error errorMessage={errors.email} />
            ) : null}
            {_inputItem(
              'Phone',
              handleChange('phone'),
              'Enter Your Phone...',
              true,
              false,
              values.phone,
              'phone-pad',
            )}
            {errors.phone && touched.phone ? (
              <Error errorMessage={errors.phone} />
            ) : null}

            <Select
              setSelectedValue={setNeedInformation}
              selectedValue={needInformation}
              data={needInformationData}
              title={'I Need Information On'}
              isMandatory={true}
              defaultButtonText={'Please Select...'}
            />
            {_errorHandler(needInformation) ? (
              <Error errorMessage={errors.needInformation} />
            ) : null}

            <Spacer mt={10} />
            <Select
              setSelectedValue={setHeardAboutSenegence}
              selectedValue={heardAboutSenegence}
              data={heardAboutSenegenceData}
              title={'I Heard About SeneGence'}
              isMandatory={true}
              defaultButtonText={'Please Select...'}
            />
            {_errorHandler(heardAboutSenegence) ? (
              <Error errorMessage={errors.heardAboutSenegence} />
            ) : null}

            <Spacer mt={10} />
            {_inputItem(
              "What Is In Your Mind?",
              handleChange('comments'),
              'Write Your Comments ',
              false,
              true,
              values.comments,
            )}
            {errors.comments && touched.comments ? (
              <Error errorMessage={errors.comments} />
            ) : null}

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
              onPress={() => handleSubmit()}
            />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({});
