import React from "react";

//User defined Imports
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
    value?: string,
    keyboardType = "default",
    containerStyle = {},
    containerHeight?:number,
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
            containerStyle={[{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            },containerStyle]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            multiline={multiline}
            containerHeight={containerHeight}
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
            keyboardType={keyboardType}
            
          />
        )}
        <Spacer mt={10} />
      </>
    );
  };