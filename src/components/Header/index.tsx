import { HeaderContainer, LocationAndCartContent } from './styles'
import logoCoffee from '../../assets/coffee-logo.png'
import mapPinFill from '../../assets/map-pin-fill.svg'
import shoppingCartFill from '../../assets/shopping-cart-fill.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffee} alt="" />
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
