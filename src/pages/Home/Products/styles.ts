import { styled } from 'styled-components'

export const ProductsContainerSection = styled.div`
  padding: 0 10rem 10rem;
`

export const ProductsSectionTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;

  margin: 2rem 0 3.375rem;
`
export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 2.5rem 2rem;
`

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 19.375rem;

  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  position: relative;
`

export const ProductCardImage = styled.img`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 4rem;
  bottom: 13.25rem;
`

export const ProductCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  flex-wrap: wrap;
`

export const ProductCardCoffeeTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  gap: 0.5rem;
`

export const ProductCardCoffeeType = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-bottom: 1rem;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const ProductCardCoffeeName = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;

  margin-bottom: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};
`
export const ProductCardCoffeeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  text-align: center;

  margin-bottom: 2rem;

  color: ${(props) => props.theme['base-label']};
`

export const ProductFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-text']};
  }

  label {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    margin-left: 0.25rem;
    margin-right: 1.5rem;

    color: ${(props) => props.theme['base-text']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    transition: 0.1s;

    background: ${(props) => props.theme['purple-dark']};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const ProductAmountInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;

  margin-right: 0.5rem;

  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;

  border-radius: 6px;
  border: none;

  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};

  &::-webkit-inner-spin-button {
    all: unset;
    min-width: 21px;
    min-height: 45px;
    margin: 17px;
    padding: 0px;
    background-image: linear-gradient(
        to top,
        transparent 0px,
        transparent 16px,
        #e6e5e5 16px,
        #e6e5e5 26px,
        transparent 26px,
        transparent 35px,
        #000 36px,
        #000 36px,
        transparent 36px,
        transparent 40px
      ),
      linear-gradient(
        to right,
        transparent 0px,
        transparent 10px,
        #000 10px,
        #000 10px,
        transparent 11px,
        transparent 21px
      );
    transform: rotate(90deg) scale(0.8, 0.9);
    cursor: pointer;
  }
`
