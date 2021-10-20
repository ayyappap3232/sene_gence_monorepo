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
    value?: string
  ) => {
    return (
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />
        {multiline ? (
          <OutlineTextInputMultiline
          value={value}
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
            multiline={multiline}
          />
        ) : (
          <OutlineTextInput
            value={value}
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        )}
        <Spacer mt={10} />
      </>
    );
  };