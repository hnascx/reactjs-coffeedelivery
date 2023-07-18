import { expressoTradicional } from '../../../assets'
import {
  ProductsContainerSection,
  ProductsSectionTitle,
  ProductContainer,
  ProductCard,
} from './styles'

export function Products() {
  return (
    <ProductsContainerSection>
      <ProductsSectionTitle>Nossos cafés</ProductsSectionTitle>
      <ProductContainer>
        <ProductCard>
          <img src={expressoTradicional} alt="" />
        </ProductCard>
      </ProductContainer>
    </ProductsContainerSection>
  )
}
