import React from 'react';
import { View, TextInputProps } from 'react-native';

import { Container, Input, Label } from './styles';

type Props = TextInputProps & {
  label?: string
}

export const InputComponent = ({ label, style, ...rest }: Props) => {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
