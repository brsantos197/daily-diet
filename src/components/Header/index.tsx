import React from 'react';

import { Avatar, Container, Logo } from './styles';
import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";

export const Header: React.FC = () => {
  return (
    <Container>
      
      <Logo source={logoImg} />
      <Avatar source={avatarImg} />
    </Container>
  );
}
