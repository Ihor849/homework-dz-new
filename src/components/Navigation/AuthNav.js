import React from 'react';
import { ContainerUser, StyledLink } from 'components/SharedLayout/SharedLayout.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register" exact>
        Регистрация
      </StyledLink>
      <StyledLink to="/login" exact>
        Логин
      </StyledLink>
    </div>
  );
}
