import React from 'react';
import TouchableScale from 'react-native-touchable-scale';

interface Props {
  activeScale?: number;
  disabled?: boolean;
  onPress?: () => void;
  style?: any;
  children: JSX.Element;
}
const Button = ({
  onPress = () => null,
  activeScale = 0.95,
  style = {},
  children,
  disabled = false,
}: Props): JSX.Element => (
  <TouchableScale
    activeScale={activeScale}
    disabled={disabled}
    onPress={() => onPress()}
    style={style}>
    {children}
  </TouchableScale>
);

export default Button;
