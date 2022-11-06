import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  padding: 20px 16px;  
  margin-bottom: 60px;

  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `} 
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `} 
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
