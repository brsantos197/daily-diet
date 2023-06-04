import { InputComponent } from '@components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Header = styled.View`
  width: 100%;

  margin-bottom: 10px;
  padding: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin: auto;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `} 
`;

export const BackButtonContainer = styled.View`
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  elevation: 10;

  border-radius: 20px;
  padding: 24px;
  padding-top: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;