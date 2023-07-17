import { Banner } from './Banner'
import { Products } from './Products'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Products />
    </HomeContainer>
  )
}
