import { styled } from 'styled-components'
import backgroundBanner from '../../assets/background-banner.svg'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90rem;
  height: 34rem;
`
export const BannerContainerBackground = styled.main`
  position: absolute;
  width: 90rem;
  height: 34rem;
  background-image: url(${backgroundBanner});
  filter: blur(80px);
`
export const BannerContainerTexts = styled.section`
  width: 70rem;
  height: 34rem;
  padding-top: 5.875rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
