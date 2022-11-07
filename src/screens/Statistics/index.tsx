import { BackIcon } from '@components/BackIcon';
import React from 'react';
import { BackButtonContainer, Container, Content, ContentTitle, CountContainer, CountText, Description, DietContainer, Header, InDietContainer, NotInDietContainer, Title } from './styles';

export const Statistics = () => {
  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <BackIcon />
        </BackButtonContainer>
        <Title>90,56%</Title>
        <Description>
          das refeições dentro da dieta
        </Description>
      </Header>
      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>
        <CountContainer>
          <CountText>22</CountText>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </CountContainer>

        <CountContainer>
          <CountText>109</CountText>
          <Description>refeições registradas</Description>
        </CountContainer>
        <DietContainer>
          <InDietContainer>
            <CountText>99</CountText>
            <Description>refeições dentro da dieta</Description>
          </InDietContainer>

          <NotInDietContainer>
            <CountText>10</CountText>
            <Description>refeições fora da dieta</Description>
          </NotInDietContainer>
        </DietContainer>
      </Content>
    </Container>
  );
}
