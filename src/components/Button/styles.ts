import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonStyleProps = {
  type?: 'SOLID' | 'OUTLINE';
}

type ButtonChildrenProps = {
  type?: 'SOLID' | 'OUTLINE';
}

export const Container = styled(TouchableOpacity) <ButtonStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme, type }) => css`
    background-color: ${type === 'SOLID' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_100};
    border-radius: 8px;
    padding: 16px 20px;
  `} 
`;

export const ButtonText = styled.Text <ButtonChildrenProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'SOLID' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100}
  `}
`;
export const Icon = styled(MaterialIcons).attrs<ButtonChildrenProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'SOLID' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100
}))`
  margin-right: 12px;
`