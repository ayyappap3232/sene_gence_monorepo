export interface IHomeCarouselData {
        id: string,
        image: any,
        buttonText?: string,
        title?: string,
        subTitle?: string,
        overlayColor?: string
}

export interface IAsSeenInCarouselData {
        id: number,
        image: any
}

export interface IOutlineButton {
        title: string;
        onPress: () => void;
        containerStyle?: {};
        textStyleContainer?: {};
        activeOpacity?: any;
        loading?: boolean;
        color?: string;
}

export interface IOutlineButtonWithIcon {
        title: string;
        onPress: () => void;
        icon: any;
        containerStyle?: {};
        textStyleContainer?: {};
}

export interface ISpacer {
        mt?: number;
        mr?: number;
        mb?: number;
        ml?: number;
}

export interface IOutlineTextProps {
        placeholder: string;
        onChangeText: any;
        containerStyle?: {};
        restProps?: any;
        multiline?: boolean;
        value?: string;
        placeholderTextColor?:string
}