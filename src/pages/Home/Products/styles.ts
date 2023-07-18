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
  align-items: flex-start;
  justify-content: center;
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  position: relative;

  img {
    position: absolute;
    bottom: 13.25rem;
  }
`
