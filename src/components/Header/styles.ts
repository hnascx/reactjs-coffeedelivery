import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LocationAndCartContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme['purple-dark']};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
  }
`
