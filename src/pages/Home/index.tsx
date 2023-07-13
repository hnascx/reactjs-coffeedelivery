import { coffeeDeliveryBannerImage, shoppingCartIconBanner } from '../../assets'
import {
  BannerContainerBackground,
  BannerContainer,
  BannerContainerElements,
  BannerContainerTexts,
  BannerContainerTitle,
  BannerContainerSubtitle,
  BannerContainerImage,
} from './styles'

export function Home() {
  return (
    <BannerContainer>
      <BannerContainerBackground />
      <BannerContainerElements>
        <BannerContainerTexts>
          <BannerContainerTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe o seu café onde estiver, a
              qualquer hora!
            </p>
          </BannerContainerTitle>
          <BannerContainerSubtitle>
            <div>
              <img src={shoppingCartIconBanner} width={32} alt="" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img src={shoppingCartIconBanner} width={32} alt="" />
              <span>Compra simples e segura</span>
            </div>
          </BannerContainerSubtitle>
        </BannerContainerTexts>
        <BannerContainerImage>
          <img src={coffeeDeliveryBannerImage} alt="" />
        </BannerContainerImage>
      </BannerContainerElements>
    </BannerContainer>
  )
}
