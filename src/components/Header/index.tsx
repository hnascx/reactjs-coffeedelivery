import { ShoppingCart } from 'phosphor-react'

import { HeaderContainer, LocationAndCartContent } from './styles'
import logoCoffee from '../../assets/coffee-logo.png'
import mapPinFill from '../../assets/map-pin-fill.svg'
import shoppingCartFill from '../../assets/shopping-cart-fill.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <LocationAndCartContent>
        <span>
          <img src={mapPinFill} alt="" />
          <div>São Paulo, SP</div>
        </span>
        <a href="">
          <img src={shoppingCartFill} alt="" />
        </a>
      </LocationAndCartContent>
    </HeaderContainer>
  )
}
