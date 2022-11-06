import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { ButtonStyleProps, ButtonText, Container, Icon } from './styles';

type Props = TouchableOpacityProps & ButtonStyleProps & {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export const Button = ({ text, type = 'SOLID', icon, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      { icon && <Icon name={icon} type={type} /> }
      <ButtonText type={type}>{text}</ButtonText>
    </Container >
  );
}