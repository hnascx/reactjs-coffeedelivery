import { RegularText, TitleText } from '../../../../components/Typography'

import {
  AddToCartWrapper,
  CardInfos,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatmoney } from '../../../../utils/formatmoney'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatmoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardInfos>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
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
