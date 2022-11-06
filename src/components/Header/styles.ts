import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 36px;
`;

export const Logo = styled.Image``;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`;
