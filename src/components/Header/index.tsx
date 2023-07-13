import { NavLink } from 'react-router-dom'

import { HeaderContainer, LocationAndCartContent } from './styles'
import { coffeeLogo, mapPinFill, shoppingCartFill } from '../../assets'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <LocationAndCartContent>
        <span>
          <img src={mapPinFill} alt="" />
          <div>São Paulo, SP</div>
        </span>
        <NavLink to="/checkout" title="Checkout">
          <img src={shoppingCartFill} alt="" />
        </NavLink>
      </LocationAndCartContent>
    </HeaderContainer>
  )
}
