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
  align-items: center;
  margin-top: 5.75rem;
`

export const ProductCardCoffeeType = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
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
export const ProductCardCurrency = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`
export const ProductCardPrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
  margin-left: 0.25rem;

  color: ${(props) => props.theme['base-text']};
`
