import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Header = styled.View`
  width: 100%;

  margin-bottom: 10px;
  padding: 24px;

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  margin-top: 27.5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `} 
`;

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `} 
`;

export const BackButtonContainer = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  elevation: 10;

  border-radius: 20px;
  padding: 24px;
  padding-top: 34px;
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const CountContainer = styled.View`
  width: 100%;
  padding: 16px;
  margin-top: 24px;

  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const CountText = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const DietContainer = styled.View`
  flex-direction: row;
`;

export const InDietContainer = styled.View`
  flex: 1;
  padding: 16px;
  margin-top: 24px;
  margin-right: 6px;

  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const NotInDietContainer = styled.View`
  flex: 1;
  padding: 16px;
  margin-top: 24px;
  margin-left: 6px;

  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;
