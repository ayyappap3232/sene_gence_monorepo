import React from "react";
import Astrick from "../Astrick";
import Spacer from "../Spacer";
import Text from "../text/Text";
import OutlineTextInput from "./OutlineTextInput";
import OutlineTextInputMultiline from "./OutlineTextInputMultiline";

export const _inputItem = (
    title: string,
    onChangeText: any,
    placeholder: string,
    isMandatory?: boolean,
    multiline?: boolean,
  ) => {
    return (
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />
        {multiline ? (
          <OutlineTextInputMultiline
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
            multiline={multiline}
          />
        ) : (
          <OutlineTextInput
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
          />
        )}
        <Spacer mt={10} />
      </>
    );
  };