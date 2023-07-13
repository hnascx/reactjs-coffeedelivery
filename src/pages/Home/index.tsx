import {
  BannerContainerBackground,
  BannerContainer,
  BannerContainerElements,
  BannerContainerTitle,
} from './styles'

export function Home() {
  return (
    <BannerContainer>
      <BannerContainerBackground />
      <BannerContainerElements>
        <BannerContainerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora!
          </p>
          <div>
            <span>
              <img
                src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                width={24}
              />
              <div>Compra simples e segura</div>
            </span>
            <span>
              <img
                src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                width={24}
              />
              <div>Embalagem mantém o café intacto</div>
            </span>
            <span>
              <img
                src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                width={24}
              />
              <div>Entrega rápida e rastreada</div>
            </span>
            <span>
              <img
                src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                width={24}
              />
              <div>O café chega fresquinho até você</div>
            </span>
          </div>
        </BannerContainerTitle>
        <div>imagem</div>
      </BannerContainerElements>
    </BannerContainer>
  )
}
