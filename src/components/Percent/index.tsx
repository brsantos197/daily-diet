import React from 'react';

import { Container, Description, Icon, Title } from './styles';

type Props = {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Percent = ({ type }: Props) => {
  return (
    <Container type={type}>
      <Icon type={type} />
      <Title>90.65%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
