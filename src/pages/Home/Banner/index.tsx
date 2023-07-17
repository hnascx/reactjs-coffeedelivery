import {
  boxIconBanner,
  coffeeDeliveryBannerImage,
  coffeeIconBanner,
  shoppingCartIconBanner,
  timerIconBanner,
} from '../../../assets'
import {
  BannerContainerBackground,
  BannerContainerElements,
  BannerContainerTexts,
  BannerContainerTitle,
  BannerContainerSubtitle,
  BannerContainerImage,
} from './styles'

export function Banner() {
  return (
    <>
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
              <img
                src={shoppingCartIconBanner}
                width={32}
                style={{ backgroundColor: `#C47F17` }}
                alt=""
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img
                src={boxIconBanner}
                width={32}
                style={{ backgroundColor: `#574F4D` }}
                alt=""
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <img
                src={timerIconBanner}
                width={32}
                style={{ backgroundColor: `#DBAC2C` }}
                alt=""
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <img
                src={coffeeIconBanner}
                width={32}
                style={{ backgroundColor: `#8047F8` }}
                alt=""
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </BannerContainerSubtitle>
        </BannerContainerTexts>
        <BannerContainerImage>
          <img src={coffeeDeliveryBannerImage} alt="" />
        </BannerContainerImage>
      </BannerContainerElements>
    </>
  )
}
