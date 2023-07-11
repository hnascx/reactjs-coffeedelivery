import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};

  /* props recebe, no caso abaixo, o que vem como propriedade do ButtonContainer em Button.tsx, que é a propriedade variant. Em seguida a propriedade CSS background-color recebe o valor de buttonVariants passado para o *VALOR variant* em Button.tsx */
  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
