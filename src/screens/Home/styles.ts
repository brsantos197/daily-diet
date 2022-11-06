import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 24px;
`;

export const Meals = styled.View`
  width: 100%;
  flex: 1;
`;
