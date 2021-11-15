import React, {useState} from 'react';
import {Button, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {COLORS} from '../../constants';

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity  onPress={() => setOpen(true)}>
        <TextInput
        pointerEvents="none"
          editable={false}
          placeholder={'DD/MM/YY'}
          style={{
            borderRadius: 5,
            height: 40,
            backgroundColor: 'rgba(244, 244, 244, 0.5)',
          }}
          value={date.toDateString()}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
