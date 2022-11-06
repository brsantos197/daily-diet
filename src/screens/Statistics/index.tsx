import { BackIcon } from '@components/BackIcon';
import React from 'react';
import { BackButtonContainer, Container, Content, ContentTitle, Description, Header, Title } from './styles';

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
      </Content>
    </Container>
  );
}
