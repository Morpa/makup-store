import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

export const Logo = ({ size = 'normal', hideOnMobile = false }: LogoProps) => (
  <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 145 45"
      role="img"
      aria-label="Movies Explorer"
    >
      <defs />
      <path
        fill="#F8F8F8"
        fillRule="evenodd"
        d="M43.526 23.982l-3.815 2.5v7.911l3.815 2.5c.76 0 1.379-.951 1.379-2.116V26.1c0-1.167-.62-2.118-1.38-2.118zM26.433 15.816a7.877 7.877 0 007.854-7.896A7.878 7.878 0 0026.433.021a7.878 7.878 0 00-7.859 7.899 7.88 7.88 0 007.86 7.896zm0-13.243c2.933 0 5.31 2.396 5.31 5.347 0 2.954-2.374 5.347-5.31 5.347a5.328 5.328 0 01-5.317-5.347 5.334 5.334 0 015.317-5.347zM9.286 15.848a6.557 6.557 0 10.59-13.1 6.557 6.557 0 00-.59 13.1zm0-10.525a3.976 3.976 0 110 7.952 3.976 3.976 0 010-7.952zM33.218 18.686H6.39c-2.067 0-3.743 1.736-3.743 3.878V38.48c0 2.142 1.676 3.876 3.743 3.876h26.828c2.067 0 3.745-1.734 3.745-3.876V22.566c0-2.144-1.678-3.88-3.745-3.88z"
        clipRule="evenodd"
      />
      <path
        className="text"
        fill="#F8F8F8"
        d="M57.408 26.696V35h-1.092v-6.192L53.556 35h-.768l-2.772-6.204V35h-1.092v-8.304H50.1l3.072 6.864 3.072-6.864h1.164zm4.72 8.412a3.4 3.4 0 01-1.68-.42 3.053 3.053 0 01-1.176-1.188c-.28-.52-.42-1.12-.42-1.8 0-.672.144-1.264.432-1.776.296-.52.696-.916 1.2-1.188a3.424 3.424 0 011.692-.42c.624 0 1.188.14 1.692.42.504.272.9.664 1.188 1.176.296.512.444 1.108.444 1.788 0 .68-.152 1.28-.456 1.8a3.09 3.09 0 01-1.212 1.188c-.512.28-1.08.42-1.704.42zm0-.96c.392 0 .76-.092 1.104-.276.344-.184.62-.46.828-.828.216-.368.324-.816.324-1.344 0-.528-.104-.976-.312-1.344a2.003 2.003 0 00-.816-.816 2.237 2.237 0 00-1.092-.276c-.4 0-.768.092-1.104.276a1.951 1.951 0 00-.792.816c-.2.368-.3.816-.3 1.344 0 .536.096.988.288 1.356.2.368.464.644.792.828.328.176.688.264 1.08.264zm7.256-.156l2.04-5.568h1.164L70.008 35h-1.272l-2.58-6.576h1.176l2.052 5.568zm4.842-6.636a.718.718 0 01-.528-.216.718.718 0 01-.216-.528c0-.208.072-.384.216-.528a.718.718 0 01.528-.216c.2 0 .368.072.504.216.144.144.216.32.216.528a.718.718 0 01-.216.528.666.666 0 01-.504.216zm.528 1.068V35h-1.092v-6.576h1.092zm7.861 3.036c0 .208-.012.428-.036.66h-5.256c.04.648.26 1.156.66 1.524.408.36.9.54 1.476.54.472 0 .864-.108 1.176-.324.32-.224.544-.52.672-.888h1.176a2.856 2.856 0 01-1.056 1.548c-.528.392-1.184.588-1.968.588-.624 0-1.184-.14-1.68-.42a2.995 2.995 0 01-1.152-1.188c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788a2.836 2.836 0 011.14-1.176c.496-.28 1.064-.42 1.704-.42.624 0 1.176.136 1.656.408.48.272.848.648 1.104 1.128.264.472.396 1.008.396 1.608zm-1.128-.228c0-.416-.092-.772-.276-1.068a1.737 1.737 0 00-.756-.684c-.312-.16-.66-.24-1.044-.24-.552 0-1.024.176-1.416.528-.384.352-.604.84-.66 1.464h4.152zm4.898 3.876c-.504 0-.956-.084-1.356-.252a2.356 2.356 0 01-.948-.72 1.946 1.946 0 01-.384-1.068h1.128c.032.328.184.596.456.804.28.208.644.312 1.092.312.416 0 .744-.092.984-.276.24-.184.36-.416.36-.696 0-.288-.128-.5-.384-.636-.256-.144-.652-.284-1.188-.42a9.777 9.777 0 01-1.2-.384 2.279 2.279 0 01-.792-.588c-.216-.264-.324-.608-.324-1.032 0-.336.1-.644.3-.924.2-.28.484-.5.852-.66a3.003 3.003 0 011.26-.252c.728 0 1.316.184 1.764.552.448.368.688.872.72 1.512h-1.092a1.12 1.12 0 00-.42-.828c-.248-.208-.584-.312-1.008-.312-.392 0-.704.084-.936.252a.779.779 0 00-.348.66c0 .216.068.396.204.54.144.136.32.248.528.336.216.08.512.172.888.276.472.128.856.256 1.152.384.296.12.548.304.756.552.216.248.328.572.336.972 0 .36-.1.684-.3.972-.2.288-.484.516-.852.684-.36.16-.776.24-1.248.24zm8.233-7.584v2.796h3.048v.9h-3.048v2.88h3.408v.9h-4.5v-8.376h4.5v.9h-3.408zM103.11 35l-1.56-2.448-1.5 2.448h-1.14l2.124-3.264-2.124-3.312h1.236l1.56 2.436 1.488-2.436h1.14l-2.112 3.252L104.346 35h-1.236zm3.402-5.364c.216-.376.536-.688.96-.936.432-.256.932-.384 1.5-.384.584 0 1.112.14 1.584.42.48.28.856.676 1.128 1.188.272.504.408 1.092.408 1.764 0 .664-.136 1.256-.408 1.776a3.002 3.002 0 01-2.712 1.644c-.56 0-1.056-.124-1.488-.372a2.764 2.764 0 01-.972-.948v4.332h-1.092v-9.696h1.092v1.212zm4.464 2.052c0-.496-.1-.928-.3-1.296a2.065 2.065 0 00-.816-.84 2.21 2.21 0 00-1.116-.288c-.4 0-.772.1-1.116.3a2.151 2.151 0 00-.816.852c-.2.368-.3.796-.3 1.284 0 .496.1.932.3 1.308.208.368.48.652.816.852.344.192.716.288 1.116.288.408 0 .78-.096 1.116-.288.344-.2.616-.484.816-.852.2-.376.3-.816.3-1.32zm3.645-5.568V35h-1.092v-8.88h1.092zm4.73 8.988a3.4 3.4 0 01-1.68-.42 3.053 3.053 0 01-1.176-1.188c-.28-.52-.42-1.12-.42-1.8 0-.672.144-1.264.432-1.776.296-.52.696-.916 1.2-1.188a3.424 3.424 0 011.692-.42c.624 0 1.188.14 1.692.42.504.272.9.664 1.188 1.176.296.512.444 1.108.444 1.788 0 .68-.152 1.28-.456 1.8a3.09 3.09 0 01-1.212 1.188c-.512.28-1.08.42-1.704.42zm0-.96c.392 0 .76-.092 1.104-.276.344-.184.62-.46.828-.828.216-.368.324-.816.324-1.344 0-.528-.104-.976-.312-1.344a2.003 2.003 0 00-.816-.816 2.237 2.237 0 00-1.092-.276c-.4 0-.768.092-1.104.276a1.951 1.951 0 00-.792.816c-.2.368-.3.816-.3 1.344 0 .536.096.988.288 1.356.2.368.464.644.792.828.328.176.688.264 1.08.264zm5.899-4.656c.192-.376.464-.668.816-.876.36-.208.796-.312 1.308-.312v1.128h-.288c-1.224 0-1.836.664-1.836 1.992V35h-1.092v-6.576h1.092v1.068zm9.385 1.968c0 .208-.012.428-.036.66h-5.256c.04.648.26 1.156.66 1.524.408.36.9.54 1.476.54.472 0 .864-.108 1.176-.324.32-.224.544-.52.672-.888h1.176a2.856 2.856 0 01-1.056 1.548c-.528.392-1.184.588-1.968.588-.624 0-1.184-.14-1.68-.42a2.995 2.995 0 01-1.152-1.188c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788a2.836 2.836 0 011.14-1.176c.496-.28 1.064-.42 1.704-.42.624 0 1.176.136 1.656.408.48.272.848.648 1.104 1.128.264.472.396 1.008.396 1.608zm-1.128-.228c0-.416-.092-.772-.276-1.068a1.737 1.737 0 00-.756-.684c-.312-.16-.66-.24-1.044-.24-.552 0-1.024.176-1.416.528-.384.352-.604.84-.66 1.464h4.152zm3.661-1.74c.192-.376.464-.668.816-.876.36-.208.796-.312 1.308-.312v1.128h-.288c-1.224 0-1.836.664-1.836 1.992V35h-1.092v-6.576h1.092v1.068z"
      />
    </svg>
  </S.Wrapper>
)
