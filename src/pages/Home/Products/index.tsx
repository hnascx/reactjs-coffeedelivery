import { expressoTradicional } from '../../../assets'
import {
  ProductsContainerSection,
  ProductsSectionTitle,
  ProductContainer,
  ProductCard,
  ProductCardImage,
  ProductCardInfos,
  ProductCardCoffeeType,
  ProductCardCoffeeName,
  ProductCardCoffeeDescription,
  ProductCardCurrency,
  ProductCardPrice,
} from './styles'

export function Products() {
  return (
    <ProductsContainerSection>
      <ProductsSectionTitle>Nossos cafés</ProductsSectionTitle>
      <ProductContainer>
        <ProductCard>
          <ProductCardImage src={expressoTradicional} alt="" />
          <ProductCardInfos>
            <ProductCardCoffeeType>Tradicional</ProductCardCoffeeType>
            <ProductCardCoffeeName>Expresso Tradicional</ProductCardCoffeeName>
            <ProductCardCoffeeDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductCardCoffeeDescription>
            <ProductCardCurrency>
              R$<ProductCardPrice>9,90</ProductCardPrice>
            </ProductCardCurrency>
          </ProductCardInfos>
        </ProductCard>
      </ProductContainer>
    </ProductsContainerSection>
  )
}
