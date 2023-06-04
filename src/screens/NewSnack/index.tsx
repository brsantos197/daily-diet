import { BackIcon } from '@components/BackIcon';
import { InputComponent } from '@components/Input';
import React from 'react';
import { View } from "react-native";
import { BackButtonContainer, Container, Content, Header, Row, Title } from './styles';

export const NewSnack = () => {
  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <BackIcon />
        </BackButtonContainer>
        <Title>Nova Refeição</Title>
      </Header>
      <Content>
        <InputComponent label='Nome' />
        <InputComponent label='Descrição' multiline />
        <Row>
          <InputComponent label='Data' datePicker style={{ flex: 1 }} />
          <InputComponent label='Hora' style={{ flex: 1, marginLeft: 20 }} />
        </Row>
      </Content>
    </Container>
  );
}
