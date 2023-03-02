import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Icon = styled(ArrowLeft).attrs(({ theme, color }) => ({
  size: 24,
  color
}))``;
