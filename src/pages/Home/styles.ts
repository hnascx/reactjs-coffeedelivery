import { styled } from 'styled-components'
import backgroundBanner from '../../assets/background-banner.svg'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 90rem;
`
export const BannerContainerBackground = styled.main`
  position: absolute;

  width: 90rem;
  height: 34rem;

  background-image: url(${backgroundBanner});
  filter: blur(80px);
`
export const BannerContainerElements = styled.div`
  width: 70rem;
  height: 34rem;
  padding: 5.875rem 0 6.75rem;

  display: flex;
`

export const BannerContainerTitle = styled.section`
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
