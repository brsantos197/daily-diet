import styled, { css } from 'styled-components/native';
import { Text, TextInput } from 'react-native';

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const Input = styled(TextInput)`
  ${({ theme, multiline }) => css`
    min-height: 48px;
    max-height: ${multiline ? '142px' : '48px' };
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
  border-radius: 6px;
  padding: 16px;
`;

export const Label = styled(Text)`
  margin-bottom: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;