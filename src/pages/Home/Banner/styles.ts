import { styled } from 'styled-components'
import backgroundBanner from '../../../assets/background-banner.svg'

export const BannerContainerBackground = styled.div`
  position: absolute;

  width: 90rem;
  height: 34rem;

  background-image: url(${backgroundBanner});
  filter: blur(80px);
`

export const BannerContainerElements = styled.div`
  position: relative;
  width: 90rem;
  height: 34rem;
  padding: 5.875rem 0 6.75rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const BannerContainerTexts = styled.main`
  width: 36.75rem;
`

export const BannerContainerTitle = styled.section`
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
`

export const BannerContainerSubtitle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 35.5rem;

  padding: 4.125rem 0;

  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    &:last-child {
      margin-right: 0.75rem;
    }

    img {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;

      border-radius: 50%;
    }

    span {
      align-items: center;

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`

export const BannerContainerImage = styled.div`
  width: 33.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`
