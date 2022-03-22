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
  activeScale = 0.98,
  children,
  disabled = false,
}: Props): JSX.Element => (
  <TouchableScale
    activeScale={activeScale}
    disabled={disabled}
    onPress={() => onPress()}>
    {children}
  </TouchableScale>
);

export default Button;
