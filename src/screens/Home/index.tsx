import React from 'react';
import { Header } from '@components/Header';
import { Container, Meals } from './styles';
import { Percent } from '@components/Percent';
import { Text } from 'react-native';
import { Button } from '@components/Button';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Percent />
      <Meals>
        <Text style={{ marginBottom: 8 }}>Refeições</Text>
        <Button text='Nova Refeição' icon='add' />
      </Meals>
    </Container>
  );
}
