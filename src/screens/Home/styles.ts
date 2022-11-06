import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type MealStyleProps = {
  inDiet: boolean;
}

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

export const New = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const Meal = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px 16px;

  margin-bottom: 22px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const MealsDateText = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `} 
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Divider = styled.View`
  flex: 0;
  height: 100%;
  margin: 0 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const MealName = styled.Text`
  flex: 1
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `} 
`;

export const MealStatus = styled.View <MealStyleProps>`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  border-radius: 999px;

  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN : theme.COLORS.RED};
`;