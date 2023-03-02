import { useNavigation } from '@react-navigation/native';
import React from 'react';
import globalTheme from 'src/theme';
import { useTheme } from 'styled-components/native';
import { Container, Icon } from './styles';

type Props = {
  color?: keyof typeof globalTheme.COLORS
}

export const BackIcon = ({ color }: Props) => {
  const navigation = useNavigation()
  const theme = useTheme()

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <Container onPress={handleBack}>
      <Icon color={color && theme.COLORS[color]} />
    </Container>
  );
}
