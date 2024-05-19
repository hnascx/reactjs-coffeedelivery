import { RegularText, TitleText } from '../../../../components/Typography'

import {
  AddToCartWrapper,
  CardInfos,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

import expressoTradicional from '../../../../assets/expresso-tradicional.png'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressoTradicional} alt="" />

      <Tags>
        <span>TRADICIONAL</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardInfos>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddToCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddToCartWrapper>
      </CardInfos>
    </CoffeeCardContainer>
  )
}
