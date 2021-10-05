import Image from 'next/image'
import * as S from './styles'

export const Loading = () => (
  <S.Wrapper>
    <Image
      src="/img/loading.gif"
      alt="Loading more products"
      role="img"
      width={60}
      height={60}
    />
    <S.Description>Loading...</S.Description>
  </S.Wrapper>
)
