import { Button } from '../Button/Button'
import * as S from './styles'

type CardProps = {
  data: {
    avatar_url: string | undefined
    name: string | undefined
    login: string | undefined
    html_url: string | undefined
    followers: string | undefined
    following: string | undefined
    public_repos: string | undefined
  }
  click?: () => void
}

export const Card = ({ data, click }: CardProps) => {
  return (
    <S.SectionCard>
      <S.InfoUser>
        <S.Avatar src={data.avatar_url} alt='img-avatar' />
        <S.UlInfo>
          <S.ContentWithMobile>
            <S.UlSubInfoMobile>
              <li>
                <h3>{data.name}</h3>
              </li>
              <li>
                <p>{data.login}</p>
              </li>
              <li>
                <span><a href={data.html_url}>{data.html_url}</a></span>
              </li>
            </S.UlSubInfoMobile>
            <S.AvatarMobile src={data.avatar_url} alt='img-avatar' />
          </S.ContentWithMobile>
          <S.UlSubInfo>
            <li>
              <p>Followers</p>
              {data.followers}
            </li>
            <li>
              <p>Following</p>
              {data.following}
            </li>
            <li>
              <p>Public repos</p>
              {data.public_repos}
            </li>
          </S.UlSubInfo>
          <S.MoreInfo>
            <Button name="more" text='More Info' click={click} />
          </S.MoreInfo>
        </S.UlInfo>
      </S.InfoUser>
    </S.SectionCard >
  )
}