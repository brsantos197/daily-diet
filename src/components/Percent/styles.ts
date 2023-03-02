import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type PercentStyleProps = {
  type: 'PRIMARY' | 'SECONDARY'
};

export const Container = styled.TouchableOpacity<PercentStyleProps>`
  position: relative;
  width: 100%;
  padding: 20px 16px;  
  margin-bottom: 60px;

  border-radius: 8px;

  align-items: center;
  text-align: center;

  background-color: ${({ theme, type = 'PRIMARY' }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Icon = styled(ArrowUpRight).attrs<PercentStyleProps>(({ theme, type = 'PRIMARY' }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<PercentStyleProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;
