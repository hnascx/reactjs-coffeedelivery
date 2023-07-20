import { expressoTradicional, shoppingCartSimple } from '../../../assets'
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
  ProductFormContainer,
  ProductAmountInput,
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
            <ProductFormContainer>
              <span>
                R$<label htmlFor="">9,90</label>
              </span>
              <ProductAmountInput type="number" step={1} min={1} max={100} />
              <button>
                <img src={shoppingCartSimple} alt="" />
              </button>
            </ProductFormContainer>
          </ProductCardInfos>
        </ProductCard>
      </ProductContainer>
    </ProductsContainerSection>
  )
}
