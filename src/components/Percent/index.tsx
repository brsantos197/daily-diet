import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Description, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Percent = ({ type, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title>90.65%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
